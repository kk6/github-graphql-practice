import { Box, Heading, Link, Text, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  url: string;
  projectUrl: string;
  stargazerCount: number;
}
export const RepositoryCard: React.VFC<Props> = ({
  name,
  description,
  url,
  projectUrl,
  stargazerCount,
}) => {
  return (
    <Box borderWidth="1px" borderColor="blackAlpha.300" w="100%" p={4}>
      <Heading size="md">
        <Link color="blue.500" href={url} isExternal>
          <Text>{name}</Text>
        </Link>
      </Heading>
      <Text>{description}</Text>
      <Link color="blue.500" href={projectUrl} isExternal>
        <Text>{projectUrl}</Text>
        <Text>
          <Icon as={FaStar} /> {stargazerCount}
        </Text>
      </Link>
    </Box>
  );
};
