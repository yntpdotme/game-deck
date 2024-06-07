import ExpandableText from '@/components/ExpandableText';
import GameAttributes from '@/components/GameAttributes';
import GameScreenshots from '@/components/GameScreenshots';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import {Box, Flex, Heading, Stack} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';

const GameDetailPage = () => {
	const {slug} = useParams();
	const navigate = useNavigate();

	const {data: game, isLoading, error} = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;
	if (error || !game) navigate('/not-found');

	return (
		<Stack padding="10px" mt={5} gap={5}>
			<Flex direction={{base: 'column', lg: 'row'}} gap={{base: 6, lg: 8}}>
				<Box>
					<Heading mb={6} fontSize="3xl">
						{game.name}
					</Heading>
					<ExpandableText>{game.description_raw}</ExpandableText>
					<GameAttributes game={game} />
				</Box>

				<GameTrailer gameId={game.id} />
			</Flex>
			<Box>
				<GameScreenshots gameId={game.id} />
			</Box>
		</Stack>
	);
};

export default GameDetailPage;
