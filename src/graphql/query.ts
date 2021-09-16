import { gql } from "@apollo/client";

export const QUERY_MOST_STARED_REPOS = gql`
  query MostStaredRepositories($searchQuery: String!, $count: Int) {
    search(query: $searchQuery, type: REPOSITORY, first: $count) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            owner {
              login
            }
            name
            description
            stargazerCount
            url
            projectUrl
          }
        }
      }
    }
  }
`;
