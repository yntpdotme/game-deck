import useGames from '@/hooks/useGames';
import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
	const {data: games, error, isLoading} = useGames();

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding="10px" pr={4} gap={6}>
				{isLoading && <Text>Loading</Text>}
				{games?.results.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
