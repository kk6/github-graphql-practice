import { VStack } from "@chakra-ui/react";
import { MostStaredRepositoriesQuery } from "generated/graphql";
import { RepositoryCard } from "./RepositoryCard";

interface Props {
  data: MostStaredRepositoriesQuery;
}
export const RepositoryList: React.VFC<Props> = ({ data }) => {
  return (
    <VStack>
      {data.search.edges?.map((e) => (
        <RepositoryCard
          key={e?.node?.id}
          name={e?.node?.__typename == "Repository" ? e?.node?.name : ""}
          description={
            e?.node?.__typename == "Repository" ? e?.node?.description : ""
          }
          url={e?.node?.__typename == "Repository" ? e?.node?.url : ""}
          projectUrl={
            e?.node?.__typename == "Repository" ? e?.node?.projectUrl : ""
          }
          stargazerCount={
            e?.node?.__typename == "Repository" ? e?.node?.stargazerCount : 0
          }
        />
      ))}
    </VStack>
  );
};
