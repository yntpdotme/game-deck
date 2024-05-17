import {createBrowserRouter} from 'react-router-dom';
import {HomePage, Layout} from './pages';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{index: true, element: <HomePage />},
			{path: '*', element: <NotFound />},
		],
	},
]);

export default router;
