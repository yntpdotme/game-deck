import {SkeletonText} from '@/components/ui/skeleton';
import {List} from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <>
      <List.Root>
        <List.Item py={3} listStyle="none">
          <SkeletonText w={44} noOfLines={1} h={6} />
        </List.Item>
      </List.Root>
    </>
  );
};

export default GenreListSkeleton;
