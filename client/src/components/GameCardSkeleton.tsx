import {SkeletonText} from '@/components/ui/skeleton';
import {Box, Card, HStack, Skeleton} from '@chakra-ui/react';

const GameCardSkeleton = () => {
	return (
		<Card.Root
			overflow="hidden"
			size={'lg'}
			borderRadius={10}
			variant="elevated"
			_hover={{transform: 'scale(1.03)', transition: 'transform .15s ease-in'}}
			mb="6px"
		>
			<Skeleton height={{base: '240px', md: '220px', lg: '200px'}} />
			<Card.Body gap="2.5" pb={10}>
				<HStack justifyContent="space-between">
					<Box>
						<SkeletonText w={28} noOfLines={1} h={4} />
					</Box>
					<Box>
						<SkeletonText w={10} noOfLines={1} />
					</Box>
				</HStack>

				<SkeletonText noOfLines={1} h={5} mt={2} />
			</Card.Body>
		</Card.Root>
	);
};

export default GameCardSkeleton;
