import "source-map-support/register";

import { ApolloServer, gql } from "apollo-server-lambda";

import { APIGatewayProxyHandler } from "aws-lambda";
import { Handler } from "aws-lambda";

export const hasura_event_handler: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

export const ping: Handler = (_e, _c, callback) =>
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      res: "I'm aliiiiiive",
      hasura: process.env.REACT_APP_HASURA_ENDPOINT,
      react: process.env.REACT_APP_BASE_URI
    })
  });

const typeDefs = gql`
  type Query {
    l_ping: String
  }
`;

const Mutation: any = {};

const Query: any = {
  l_ping: async (_p, args, _context, _info) => {
    return "pong";
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }),

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  playground: true,
  introspection: true
});

export const graphql = server.createHandler();
