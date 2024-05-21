import Game from '@/entities/Game';
import getCroppedImagedUrl from '@/services/imageUrl';
import {Card, HStack, Image} from '@chakra-ui/react';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

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
				src={getCroppedImagedUrl(game.background_image)}
				objectFit="cover"
				h={{base: '240px', md: '220px', lg: '200px'}}
			/>
			<Card.Body gap="2.5">
				<Card.Description fontSize="md">
					<HStack justifyContent="space-between">
						<PlatformIconList
							platforms={game.parent_platforms?.map(p => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
				</Card.Description>

				<Card.Title pb={1} truncate>
					{game.name}
				</Card.Title>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
