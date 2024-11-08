import {create} from 'zustand';

type GameQuery = {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
};

type GameQueryStore = {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
};

const useGameQueryStore = create<GameQueryStore>(set => ({
	gameQuery: {},
	setGenreId: genreId => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
	setPlatformId: platformId => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
	setSortOrder: sortOrder => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
}));

export default useGameQueryStore;
