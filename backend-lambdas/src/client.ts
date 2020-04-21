// import { ApolloClient, InMemoryCache } from "apollo-boost";
// import { createHttpLink } from "apollo-link-http";
import "cross-fetch/polyfill";

import { GraphQLClient } from "graphql-request";
import { getSdk } from "./__generated__/requests";

let endpoint = process.env.REACT_APP_HASURA_ENDPOINT;
let secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

if (!secret) {
  console.error("Missing secret for lambdas");
  throw new Error("Missing secret for lambdas");
}
if (!endpoint) {
  console.error("Missing endpoint for lambdas");
  throw new Error("Missing endpoint for lambdas");
}
// async function main() {

// async function main() {
const client = new GraphQLClient(endpoint, {
  headers: { "x-hasura-admin-secret": secret }
});
export const gqlClient = getSdk(client);
