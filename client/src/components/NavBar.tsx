import {ColorModeButton} from '@/components/ui/color-mode';
import {HStack, Image} from '@chakra-ui/react';
import logo from '../assets/logo.png';

const NavBar = () => {
	return (
		<HStack padding="10px" justify="space-between">
			<Image src={logo} width={{base: '42px', lg: '52px'}}></Image>
			<ColorModeButton mt={{base: 2, lg: 3}} scale={{base: 1.1, lg: 1.2}} />
		</HStack>
	);
};

export default NavBar;
