import useTrailers from '@/hooks/useTrailers';
import {Box, Heading} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

type Props = {
  gameId: number;
};

const GameTrailer = ({gameId}: Props) => {
  const {data: trailer, isLoading, error} = useTrailers(gameId);
  const navigate = useNavigate();

  if (isLoading) return null;
  if (error) navigate('/not-found');

  const first = trailer?.results[0];

  return first ? (
    <Box mt={2} minW="50%">
      <Heading fontSize="lg" mb={5} color="gray.500">
        Trailer
      </Heading>
      <video
        src={first.data['480']}
        poster={first.preview}
        controls
        width="100%"
      />
    </Box>
  ) : null;
};

export default GameTrailer;
