import { gql } from "@apollo/client";

export const FETCH_ISSUES = gql`
  query Feed($repoId: ID!) {
    node(id: $repoId) {
      ... on Repository {
        id
        name
        issues(last: 5) {
          totalCount
          nodes {
            id
            title
            body
          }
        }
      }
    }
  }
`;

export const FETCH_REPOS_LIST = gql`
    query Feed($userHandle: String!, $limit: Int, $endCursor: String) {
      user(login: $userHandle) {
        id
        email
        name
        repositories(first: $limit, after: $endCursor, isFork: false) {
          pageInfo {
            startCursor
            hasNextPage
            endCursor
          }
          totalCount
          nodes {
            id
            name
            description
            url
          }
        }
      }
    }
  `;
