import useScreenshots from '@/hooks/useScreenshots';
import {Heading, Image, SimpleGrid} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

type Props = {
	gameId: number;
};

const GameScreenshots = ({gameId}: Props) => {
	const {data: screenshots, isLoading, error} = useScreenshots(gameId);
	const navigate = useNavigate();

	if (isLoading) return null;
	if (error) navigate('/not-found');

	return (
		<>
			<Heading fontSize="lg" mb={5} color="gray.500">
				Screenshots
			</Heading>
			<SimpleGrid columns={{base: 1, md: 2}} gap={{sm: 3, md: 2, lg: 2}}>
				{screenshots?.results.map(file => (
					<Image key={file.id} src={file.image} rounded="lg" />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameScreenshots;
