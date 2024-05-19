import useGames from '@/hooks/useGames';
import {Text} from '@chakra-ui/react';

const GameGrid = () => {
	const {data: games, error, isLoading} = useGames();

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			{isLoading && <Text>Loading</Text>}
			{games?.results.map(game => (
				<li key={game.id}>{game.name}</li>
			))}
		</>
	);
};

export default GameGrid;
