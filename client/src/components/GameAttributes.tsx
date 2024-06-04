import CriticScore from '@/components/CriticScore';
import DefinitionItem from '@/components/DefinitionItem';
import Game from '@/entities/Game';
import {SimpleGrid, Text} from '@chakra-ui/react';

type Props = {
	game: Game;
};

const GameAttributes = ({game}: Props) => {
	return (
		<SimpleGrid as="dl" columns={2} mt={5}>
			<DefinitionItem term="Platforms">
				{game.parent_platforms?.map(({platform}) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			</DefinitionItem>

			<DefinitionItem term="Genres">
				{game.genres?.map(genre => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			</DefinitionItem>

			<DefinitionItem term="Metascore">
				<CriticScore score={game.metacritic} />
			</DefinitionItem>

			<DefinitionItem term="Publishers">
				{game.publishers?.map(publisher => (
					<Text key={publisher.id}>{publisher.name}</Text>
				))}
			</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;
