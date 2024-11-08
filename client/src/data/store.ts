import { create } from 'zustand';

type GameQuery = {
	genreId?: number;
	platformId?: number;
};

type GameQueryStore = {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
};

const useGameQueryStore = create<GameQueryStore>(set => ({
	gameQuery: {},
	setGenreId: genreId => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
	setPlatformId: platformId => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
}));

export default useGameQueryStore;
