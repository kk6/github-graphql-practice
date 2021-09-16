import { VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { RepositoryCard } from "./RepositoryCard";

export const RepositoryList: NextPage = () => {
  return (
    <VStack>
      <RepositoryCard />
    </VStack>
  );
};
