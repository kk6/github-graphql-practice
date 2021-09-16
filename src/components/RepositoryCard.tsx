import { Box, Heading, Link, Text } from "@chakra-ui/react";

export const RepositoryCard: React.VFC = () => {
  return (
    <Box borderWidth="1px" borderColor="blackAlpha.300" w="100%" p={4}>
      <Heading size="md">
        <Link
          color="blue.500"
          href="https://github.com/django/django"
          isExternal
        >
          <Text>django</Text>
        </Link>
      </Heading>
      <Text>The Web framework for perfectionists with deadlines.</Text>
      <Link color="blue.500" href="https://www.djangoproject.com" isExternal>
        <Text>www.djangoproject.com</Text>
      </Link>
    </Box>
  );
};
