import GenreListSkeleton from '@/components/GenreListSkeleton';
import {Button} from '@/components/ui/button';
import useGenres from '@/hooks/useGenres';
import getCroppedImagedUrl from '@/services/imageUrl';
import {Heading, HStack, Image, List} from '@chakra-ui/react';

const GenreList = () => {
	const {data: genres, error, isLoading} = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	if (error) return null;

	return (
		<>
			<Heading fontSize="2xl" mt={4} mb={2}>
				Genres
			</Heading>
			<List.Root>
				{isLoading && skeletons.map(s => <GenreListSkeleton key={s} />)}
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
