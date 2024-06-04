import {Box, Heading} from '@chakra-ui/react';
import {ReactNode} from 'react';

type Props = {
	term: string;
	children: ReactNode | ReactNode[];
};

const DefinitionItem = ({term, children}: Props) => {
	return (
		<Box my={5}>
			<Heading as="dt" fontSize="lg" mb={2} color="gray.500">
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
};

export default DefinitionItem;
