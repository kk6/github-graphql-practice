import { VStack } from "@chakra-ui/react";
import { MostStaredRepositoriesQuery } from "generated/graphql";
import { NextPage } from "next";
import { RepositoryCard } from "./RepositoryCard";

interface Props {
  data: MostStaredRepositoriesQuery;
}
export const RepositoryList: NextPage<Props> = ({ data }) => {
  return (
    <VStack>
      {data.search.edges?.map((e) => (
        <RepositoryCard
          key={e?.node?.id}
          name={e?.node?.name}
          description={e?.node?.description}
          url={e?.node?.url}
          projectUrl={e?.node?.projectUrl}
          stargazerCount={e?.node?.stargazerCount}
        />
      ))}
    </VStack>
  );
};
