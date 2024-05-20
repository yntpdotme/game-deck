import Platform from './Platform';

type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
};

export default Game;
