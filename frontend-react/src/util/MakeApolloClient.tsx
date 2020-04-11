import "cross-fetch/polyfill";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { GraphQLClient } from "graphql-request";
import React from "react";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
import { getSdk } from "../__generated__/requests";
import { onError } from "@apollo/link-error";
import { setContext } from "@apollo/link-context";
// import { split } from "apollo-link";
import { useAuth0 } from "./AuthZeroWrapper";

export type GqlRequestClient = ReturnType<typeof getSdk>;
export const GqlRequestContext = React.createContext<GqlRequestClient>(
  null as any
);
// const httpToWsUrl = (s: string) =>
//   s.replace(/^http:\/\//, "ws://").replace(/^https:\/\//, "wss://");

export const MakeApolloClient: React.FC = ({ children }) => {
  const { token } = useAuth0() || {};
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_HASURA_ENDPOINT,
  });
  const gqlRequestClient = getSdk(
    new GraphQLClient(process.env.REACT_APP_HASURA_ENDPOINT!, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    })
  );
  // const wsLink = new WebSocketLink({
  //   uri: httpToWsUrl(
  //     process.env.REACT_APP_HASURA_ENDPOINT || "MISSING ENDPOINT ENV VAR"
  //   ),
  //   options: {
  //     lazy: true,
  //     reconnect: true,
  //     connectionParams: {
  //       headers: {
  //         Authorization: token ? `Bearer ${token}` : ""
  //       }
  //     }
  //   }
  // });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // console.log("Error Link", rest, graphQLErrors);
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path, ...rest }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, rest`,
          rest
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: token
        ? {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          }
        : headers,
    };
  });

  // const link = split(
  //   // split based on operation type
  //   ({ query }) => {
  //     const definition = getMainDefinition(query);
  //     return (
  //       definition.kind === "OperationDefinition" &&
  //       definition.operation === "subscription"
  //     );
  //   },
  //   wsLink,
  //   authLink.concat(errorLink).concat(httpLink)
  // );
  const link = authLink.concat(errorLink).concat(httpLink);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
  return (
    <GqlRequestContext.Provider value={gqlRequestClient}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </GqlRequestContext.Provider>
  );
};
