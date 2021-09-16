import { Flex, Heading, Icon, Text, Spacer } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Header: React.VFC = () => {
  return (
    <Flex bg="grey" color="white" align="center">
      <Icon as={FaGithub} boxSize={8} m={4} />
      <Heading as="h1" size="md">
        Repository Star Ranking
      </Heading>
    </Flex>
  );
};
