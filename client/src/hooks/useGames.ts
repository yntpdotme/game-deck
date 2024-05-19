import Game from '@/entities/Game';
import APIClient from '@/services/apiClient';
import {useQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Game>('/games');

const useGames = () =>
	useQuery({
		queryKey: ['games'],
		queryFn: () => apiClient.getAll(),
		staleTime: ms('24h'),
	});

export default useGames;
