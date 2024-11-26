import useGameQueryStore from '@/data/store';
import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import {Heading} from '@chakra-ui/react';

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" fontSize="4xl" mt={3} mb={9}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
