import usePlatforms from '@/hooks/usePlatforms';
import {
	Button,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';

const PlatformSelector = () => {
	const {data: platforms, error} = usePlatforms();

	if (error) return null;

	return (
		<MenuRoot>
			<MenuTrigger asChild mt={3}>
				<Button variant="subtle" size="md" rounded={6}>
					{'Platforms'}
					<BsChevronDown />
				</Button>
			</MenuTrigger>
			<MenuContent pos="absolute" mt={2} rounded={6} p={2}>
				{platforms?.results.map(platform => (
					<MenuItem key={platform.id} value={platform.slug}>
						{platform.name}
					</MenuItem>
				))}
			</MenuContent>
		</MenuRoot>
	);
};

export default PlatformSelector;
