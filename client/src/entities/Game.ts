import Genre from '@/entities/Genre';
import Platform from '@/entities/Platform';
import Publisher from '@/entities/Publisher';

type Game = {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
	metacritic: number;
	slug: string;
	description_raw: string;
	genres: Genre[];
	publishers: Publisher[];
};

export default Game;
