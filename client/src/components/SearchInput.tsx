import {InputGroup} from '@/components/ui/input-group';
import useGameQueryStore from '@/data/store';
import {Input} from '@chakra-ui/react';
import {useRef} from 'react';
import {GrSearch} from 'react-icons/gr';
import {useNavigate} from 'react-router-dom';

const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore(s => s.setSearchText);
	const navigate = useNavigate();

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (ref.current) {
			setSearchText(ref.current.value);
			navigate('/');
		}
	};

	return (
		<form onSubmit={handleSearch}>
			<InputGroup
				flex="1"
				startElement={<GrSearch />}
				w={{base: '60', md: '80'}}
			>
				<Input placeholder="Search games..." variant="subtle" ref={ref} h={{base: '8', md:'9'}}/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
