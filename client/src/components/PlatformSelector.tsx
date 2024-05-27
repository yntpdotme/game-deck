import {Button} from '@/components/ui/button';
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from '@/components/ui/menu';
import useGameQueryStore from '@/data/store';
import usePlatforms from '@/hooks/usePlatforms';
import {MdKeyboardDoubleArrowDown} from 'react-icons/md';

const PlatformSelector = () => {
	const {data: platforms, error} = usePlatforms();

	const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
	const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

	const selectedPlatform = platforms?.results.find(
		p => p.id === selectedPlatformId
	);

	if (error) return null;

	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button variant="subtle" size="md" rounded={6}>
					{selectedPlatform?.name || 'Platforms'}
					<MdKeyboardDoubleArrowDown />
				</Button>
			</MenuTrigger>
			<MenuContent pos="absolute" mt={2} rounded={6} p={2}>
				{platforms?.results.map(platform => (
					<MenuItem
						key={platform.id}
						value={platform.slug}
						onClick={() => setSelectedPlatformId(platform.id)}
						whiteSpace="nowrap"
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuContent>
		</MenuRoot>
	);
};

export default PlatformSelector;
