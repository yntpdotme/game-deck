import GameCard from '@/components/GameCard';
import useGames from '@/hooks/useGames';
import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
	const {data: games, error, isLoading} = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} pr={2} gap={6} mt={6}>
				{isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
				{games?.results.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
