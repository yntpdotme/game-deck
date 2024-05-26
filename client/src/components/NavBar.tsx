import logoLight from '@/assets/logo-light.png';
import logo from '@/assets/logo.png';
import {ColorModeButton, useColorMode} from '@/components/ui/color-mode';
import {HStack, Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

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
			<ColorModeButton mt={{base: 2, lg: 3}} scale={{base: 1.1, lg: 1.2}} />
		</HStack>
	);
};

export default NavBar;
