import useGameQueryStore from '@/data/store';
import Game from '@/entities/Game';
import APIClient from '@/services/apiClient';
import {useQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
	const gameQuery = useGameQueryStore(s => s.gameQuery);

	return useQuery({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId
						? gameQuery.platformId
						: undefined,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: ms('24h'),
	});
};
export default useGames;
