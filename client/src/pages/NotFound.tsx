import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="90vh"
      direction="column"
    >
      <VStack gap={3} textAlign="center">
        <Heading size="2xl">404</Heading>
        <Text fontSize="xl" color="gray.600">
          Oops! Page Not Found
        </Text>
        <Text color="gray.500">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        <Link to="/">
          <Button
            colorScheme="blue"
            size="lg"
            mt={2}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
          >
            Back to Home
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default NotFound;