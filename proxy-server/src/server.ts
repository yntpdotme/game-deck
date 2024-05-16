import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import proxyRouter from './proxy';

const app = express();

const corsOptions = {
	origin:
		process.env.CORS_ORIGIN === '*' ? '*' : process.env.CORS_ORIGIN?.split(','),
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: 100, // Limit each IP to 100 requests per minute
	standardHeaders: true,
	legacyHeaders: false,
	keyGenerator: (req, res) => {
		return req.clientIp; // IP address from requestIp.mw(), as opposed to req.ip
	},
	handler: (_, __, ___, options) => {
		throw new Error(
			`There are too many requests. You are only allowed ${
				options.max
			} requests per ${options.windowMs / 60000} minutes`
		);
	},
});

// global middlewares
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(hpp());
app.use('/api', limiter);
app.use(express.json({limit: '16kb'}));

// proxy router for API requests
app.use('/api', proxyRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));
