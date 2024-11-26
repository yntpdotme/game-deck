import {Badge} from '@chakra-ui/react';

type Props = {
  score: number;
};

const CriticScore = ({score}: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

  if (!score) return null;

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
