import APIClient from '@/services/apiClient';
import {useQuery} from '@tanstack/react-query';

const apiClient = new APIClient('/games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', 'slug'],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
