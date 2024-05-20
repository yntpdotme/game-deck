import Game from '@/entities/Game';
import {Card, Image} from '@chakra-ui/react';

type Props = {
	game: Game;
};

const GameCard = ({game}: Props) => {
	return (
		<Card.Root
			overflow="hidden"
			size={'lg'}
			borderRadius={10}
			variant="elevated"
			_hover={{transform: 'scale(1.03)', transition: 'transform .15s ease-in'}}
			mb="6px"
		>
			<Image
				src={game.background_image}
				objectFit="cover"
				h={{base: '240px', md: '220px', lg: '200px'}}
			/>
			<Card.Body gap="1">
				<Card.Description>Platforms</Card.Description>
				<Card.Title pb={1} truncate>
					{game.name}
				</Card.Title>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;