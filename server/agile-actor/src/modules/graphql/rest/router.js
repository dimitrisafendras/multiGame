
import convert from 'koa-convert';
import graphQLHTTP from 'koa-graphql';

import { schema } from '../schema';

export const prefix = '/graphql';

export const routes = [
  {
    method: 'all',
    route: '/',
    handlers: [
      convert(graphQLHTTP((request, { session }) => ({
        schema,
        context: session,
        graphiql: true,
      }))),
    ],
  },
];
