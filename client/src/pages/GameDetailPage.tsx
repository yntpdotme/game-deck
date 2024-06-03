import useGame from '@/hooks/useGame';
import {Box, Heading, Text} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';

const GameDetailPage = () => {
	const {slug} = useParams();
	const navigate = useNavigate();

	const {data: game, isLoading, error} = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;
	if (error || !game) navigate('/not-found');

	return (
		<Box padding="10px" mt={5}>
			<Heading mb={6} fontSize="3xl">
				{game.name}
			</Heading>
			<Text>{game.description_raw}</Text>
		</Box>
	);
};

export default GameDetailPage;
