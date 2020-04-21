import "source-map-support/register";

import { ApolloServer, gql } from "apollo-server-lambda";
import { GraphQLScalarType, Kind } from "graphql";

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
  scalar uuid
  type Query {
    l_ping(id: uuid!): String
  }
`;

const uuid = new GraphQLScalarType({
  name: "uuid",
  description:
    "The UUID scalar type represents UUID values as specified by [RFC 4122](https://tools.ietf.org/html/rfc4122).",
  serialize: value => {
    // if (!isUUID(value)) {
    //   throw new TypeError(`UUID cannot represent non-UUID value: ${value}`);
    // }

    return value.toLowerCase();
  },
  parseValue: value => {
    // if (!isUUID(value)) {
    //   throw new TypeError(`UUID cannot represent non-UUID value: ${value}`);
    // }

    return value.toLowerCase();
  },
  parseLiteral: ast => {
    if (ast.kind === Kind.STRING) {
      // if (isUUID(ast.value)) {
      return ast.value;
      // }
    }

    return undefined;
  }
});

const Mutation: any = {};

const Query: any = {
  l_ping: async (_p, args, _context, _info) => {
    return "pong";
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: { uuid, Query },
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
