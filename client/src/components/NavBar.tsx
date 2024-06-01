import logoLight from '@/assets/logo-light.png';
import logo from '@/assets/logo.png';
import {ColorModeButton, useColorMode} from '@/components/ui/color-mode';
import {HStack, Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';

const NavBar = () => {
	const {colorMode} = useColorMode();

	return (
		<HStack padding="10px" justify="space-between">
			<Link to="/">
				<Image
					src={colorMode === 'dark' ? logo : logoLight}
					width={{base: '42px', lg: '52px'}}
				/>
			</Link>
			<HStack mt={{base: 2, lg: 3}} gap={4}>
				<SearchInput />
				<ColorModeButton scale={{base: 1, lg: 1.1}} />
			</HStack>
		</HStack>
	);
};

export default NavBar;
