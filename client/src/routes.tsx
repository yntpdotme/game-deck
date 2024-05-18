import { createBrowserRouter } from 'react-router-dom';
import { HomePage, Layout } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{index: true, element: <HomePage />},
		],
	},
]);

export default router;
