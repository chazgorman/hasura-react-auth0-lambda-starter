// import { ApolloClient, InMemoryCache } from "apollo-boost";
// import { createHttpLink } from "apollo-link-http";
import "cross-fetch/polyfill";

import { GraphQLClient } from "graphql-request";
import { getSdk } from "./__generated__/requests";

// async function main() {
const client = new GraphQLClient(process.env.REACT_APP_HASURA_ENDPOINT, {
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
  }
});
export const gqlClient = getSdk(client);
