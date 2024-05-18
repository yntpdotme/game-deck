import {Box, Grid, GridItem} from '@chakra-ui/react';

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
		>
			<Box hideBelow="lg">
				<GridItem area="aside" bg="yellow.500">
					Aside
				</GridItem>
			</Box>
			<GridItem area="main" bg="dodgerblue">
				Main
			</GridItem>
		</Grid>
	);
};

export default HomePage;
