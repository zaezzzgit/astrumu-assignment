import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { token } from "./config";

import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : null,
    },
  };
});

type RepositoryConnection = {
  nodes: [];
};

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: "https://api.github.com/graphql" })
  ),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        fields: {
          repositories: {
            keyArgs: ["id"],
            merge(existing: RepositoryConnection = { nodes: [] }, incoming) {
              return {
                ...incoming,
                nodes: [...existing.nodes, ...incoming.nodes],
              };
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </ApolloProvider>,
  document.getElementById("root")
);
