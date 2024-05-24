import GameGrid from '@/components/GameGrid';
import GenreList from '@/components/GenreList';
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
			padding="10px"
		>
			<Box hideBelow="lg">
				<GridItem area="aside">
					<GenreList />
				</GridItem>
			</Box>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
