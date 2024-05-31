import GameGrid from '@/components/GameGrid';
import GameHeading from '@/components/GameHeading';
import GenreList from '@/components/GenreList';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react';

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '280px 1fr',
			}}
			padding="10px"
		>
			<Box hideBelow="lg">
				<GridItem area="aside">
					<GenreList />
				</GridItem>
			</Box>
			<GridItem area="main">
				<GameHeading/>
				<Flex gap={5} mt={3} mb={6}>
					<PlatformSelector />
					<SortSelector />
				</Flex>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
