import Platform from '@/entities/Platform';

type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
	slug: string;
	description_raw: string;
};

export default Game;
