import apicache from 'apicache';
import axios from 'axios';
import express, {Request, Response} from 'express';

const router = express.Router();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

const cache = apicache.middleware;

// Apply caching for 2 minutes to all routes in this router
router.use(cache('2 minutes'));

router.use(async (req: Request, res: Response) => {
	try {
		const {path, method, query, body} = req;

		const response = await axios({
			url: `${API_BASE_URL}${path}`,
			method,
			params: {
				key: API_KEY,
				...query,
			},
			data: body,
		});

		res.status(response.status).json(response.data);
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			// Pass along error response from third-party API
			res.status(error.response.status).json(error.response.data);
		} else {
			res.status(500).json({error: 'Internal Server Error'});
		}
	}
});

export default router;
