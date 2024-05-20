import GameGrid from '@/components/GameGrid';
import {Box, Grid, GridItem} from '@chakra-ui/react';

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
		>
			<Box hideBelow="lg">
				<GridItem area="aside" bg="yellow.500">
					Aside
				</GridItem>
			</Box>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
