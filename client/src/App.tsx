import {Box, Container, Grid, GridItem} from '@chakra-ui/react';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<Container maxW="7xl">
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
			>
				<GridItem area="nav">
					<NavBar />
				</GridItem>
				<Box hideBelow="lg">
					<GridItem area="aside" bg="yellow.500">
						Aside
					</GridItem>
				</Box>
				<GridItem area="main" bg="dodgerblue">
					Main
				</GridItem>
			</Grid>
		</Container>
	);
};

export default App;
