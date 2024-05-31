import useGameQueryStore from '@/data/store';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import {Heading} from '@chakra-ui/react';

const GameHeading = () => {
	const genreId = useGameQueryStore(s => s.gameQuery.genreId);
	const {data: genres} = useGenres();
	const genre = genres?.results.find(g => g.id === genreId);

	const platformId = useGameQueryStore(s => s.gameQuery.platformId);
	const {data: platforms} = usePlatforms();
	const platform = platforms?.results.find(p => p.id === platformId);

	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

	return (
		<Heading as="h1" fontSize="4xl" mt={3} mb={9}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
