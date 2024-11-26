import {Button} from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import useGameQueryStore from '@/data/store';
import {HiMiniChevronUpDown} from 'react-icons/hi2';

const SortSelector = () => {
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: 'name', label: 'Name (A-Z)'},
    {value: '-name', label: 'Name (Z-A)'},
    {value: 'added', label: 'Date added (oldest)'},
    {value: '-added', label: 'Date added (newest)'},
    {value: 'released', label: 'Release Date (oldest)'},
    {value: '-released', label: 'Release Date (newest)'},
    {value: '-metacritic', label: 'Popularity (Highest)'},
    {value: '-rating', label: 'Average rating (Highest)'},
  ];

  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const currentSortOder = sortOrders.find(order => order.value === sortOrder);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="md" rounded={6}>
          Oder by : {currentSortOder?.label || 'Relevance'}
          <HiMiniChevronUpDown />
        </Button>
      </MenuTrigger>

      <MenuContent pos="absolute" mt={2} rounded={6} p={2}>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            value={order.value}
            whiteSpace="nowrap"
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
