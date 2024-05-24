import {Button} from '@/components/ui/button';
import useGenres from '@/hooks/useGenres';
import getCroppedImagedUrl from '@/services/imageUrl';
import {Heading, HStack, Image, List} from '@chakra-ui/react';

const GenreList = () => {
	const {data: genres, error, isLoading} = useGenres();

	if (error) return null;
	if (isLoading) return <p>Loading...</p>;

	return (
		<>
			<Heading fontSize="2xl" mt={4} mb={2}>
				Genres
			</Heading>
			<List.Root>
				{genres?.results.map(genre => (
					<List.Item key={genre.id} py={1} listStyle="none" ml={0.5}>
						<HStack>
							<Image
								height={7}
								borderRadius={4}
								objectFit="cover"
								src={getCroppedImagedUrl(genre.image_background)}
							/>
							<Button
								variant="plain"
								px={1.5}
								m={0}
								fontSize="lg"
								fontWeight="normal"
							>
								{genre.name}
							</Button>
						</HStack>
					</List.Item>
				))}
			</List.Root>
		</>
	);
};

export default GenreList;
