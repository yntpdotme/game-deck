import useGenres from '@/hooks/useGenres';
import {Heading, List} from '@chakra-ui/react';

const GenreList = () => {
	const {data: genres, error, isLoading} = useGenres();

	if (error) return null;
	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<Heading fontSize="2xl" mb={3}>
				Genres
			</Heading>
			<List.Root>
				{genres?.results.map(genre => (
					<List.Item key={genre.id} py={1.5} >
						{genre.name}
					</List.Item>
				))}
			</List.Root>
		</>
	);
};

export default GenreList;
