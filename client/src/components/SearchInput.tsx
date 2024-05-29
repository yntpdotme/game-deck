import {InputGroup} from '@/components/ui/input-group';
import {Input} from '@chakra-ui/react';
import {GrSearch} from 'react-icons/gr';

const SearchInput = () => {
	return (
		<InputGroup flex="1" startElement={<GrSearch />} w={{base: '60', md: '80'}}>
			<Input placeholder="Search games..." variant="subtle" />
		</InputGroup>
	);
};

export default SearchInput;
