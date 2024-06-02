import useGameQueryStore from '@/data/store';
import Game from '@/entities/Game';
import APIClient from '@/services/apiClient';
import {useInfiniteQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
	const gameQuery = useGameQueryStore(s => s.gameQuery);

	return useInfiniteQuery({
		queryKey: ['games', gameQuery],
		queryFn: ({pageParam}) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId || undefined,
					parent_platforms: gameQuery.platformId || undefined,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) =>
			lastPage.next ? allPages.length + 1 : undefined,
		staleTime: ms('24h'),
	});
};
export default useGames;
