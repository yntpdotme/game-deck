import {create} from 'zustand';

type GameQuery = {
	genreId?: number;
};

type GameQueryStore = {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
};

const useGameQueryStore = create<GameQueryStore>(set => ({
	gameQuery: {},
	setGenreId: genreId =>
		set(store => ({gameQuery: {...store.gameQuery, genreId}})),
}));

export default useGameQueryStore;
