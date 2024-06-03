import {GameDetailPage, HomePage, Layout} from '@/pages';
import {createBrowserRouter} from 'react-router-dom';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{index: true, element: <HomePage />},
			{path: 'games/:slug', element: <GameDetailPage />},
			{path: '*', element: <NotFound />},
		],
	},
]);

export default router;
