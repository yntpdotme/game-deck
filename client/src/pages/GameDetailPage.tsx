import ExpandableText from '@/components/ExpandableText';
import GameAttributes from '@/components/GameAttributes';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import {GridItem, Heading, SimpleGrid} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';

const GameDetailPage = () => {
	const {slug} = useParams();
	const navigate = useNavigate();

	const {data: game, isLoading, error} = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;
	if (error || !game) navigate('/not-found');

	return (
		<SimpleGrid
			padding="10px"
			mt={5}
			columns={{base: 1, lg: 2}}
			gap={{base: 6, lg: 8}}
		>
			<GridItem>
				<Heading mb={6} fontSize="3xl">
					{game.name}
				</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem mt={2}>
				<GameTrailer gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
