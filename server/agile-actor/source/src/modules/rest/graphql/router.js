
import convert from 'koa-convert';
import graphQLHTTP from 'koa-graphql';

import { schema } from '../../graphql/schema';
import config from '../../../../config';

const { graphiql } = config;

export const prefix = '/graphql';

export const routes = [
  {
    method: 'all',
    route: '/',
    handlers: [
      convert(graphQLHTTP((request, { session }) => ({
        schema,
        context: session,
        graphiql,
      }))),
    ],
  },
];
