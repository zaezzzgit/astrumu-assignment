import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

import { gql } from "@apollo/client";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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
