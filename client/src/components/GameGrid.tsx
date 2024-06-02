import GameCard from '@/components/GameCard';
import useGames from '@/hooks/useGames';
import {SimpleGrid, Spinner, Text} from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const {
		data: games,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount =
		games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore={hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} pr={2} gap={6}>
				{isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
				{games?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map(game => (
							<GameCard key={game.id} game={game} />
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
