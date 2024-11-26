import {Skeleton, SkeletonText} from '@/components/ui/skeleton';
import {Box, Flex, Heading, SimpleGrid, Stack} from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';

const GameDetailsSkeleton = () => {
  const screenshots = [1, 2, 3, 4];

  return (
    <Stack padding="10px" mt={5} gap={5}>
      <Flex direction={{base: 'column', lg: 'row'}} gap={{base: 6, lg: 8}}>
        <Box minW="50%">
          <Heading mb={6} fontSize="3xl">
            Name
          </Heading>
          <SkeletonText noOfLines={3} h={4} />
          <SimpleGrid as="dl" columns={2} mt={5}>
            <DefinitionItem term="Platforms">
              <SkeletonText noOfLines={3} h={4} w={24} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
              <SkeletonText noOfLines={1} h={4} w={24} />
            </DefinitionItem>
            <DefinitionItem term="Metascore">
              <SkeletonText noOfLines={1} h={4} w={10} />
            </DefinitionItem>
            <DefinitionItem term="Publishers">
              <SkeletonText noOfLines={1} h={4} w={24} />
            </DefinitionItem>
          </SimpleGrid>
        </Box>

        <Box mt={2} minW="50%">
          <Heading fontSize="lg" mb={5} color="gray.500">
            Trailer
          </Heading>
          <Skeleton height="310px" width={{lg: '550px'}} />
        </Box>
      </Flex>
      <Box>
        <Heading fontSize="lg" mb={5} color="gray.500">
          Screenshots
        </Heading>
        <SimpleGrid
          columns={{base: 1, md: 2}}
          gap={{sm: 3, md: 2, lg: 2}}
          p="10px"
        >
          {screenshots.map(s => (
            <Skeleton key={s} height="300px" rounded="lg" />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default GameDetailsSkeleton;
