import { Container } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { RepositoryList } from "@components/RepositoryList";
import { useMostStaredRepositoriesQuery } from "generated/graphql";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const variables = {
    searchQuery: "language:Python stars:>10000",
    count: 10,
  };
  const { data, error, loading } = useMostStaredRepositoriesQuery({
    variables: variables,
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>ERROR</div>;
  }
  return (
    <>
      <Container maxW="4xl">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <RepositoryList data={data} />
      </Container>
    </>
  );
};

export default Home;
