import graphqlSchema from 'graph.ql';

import {
  user,
  contacts,
} from '../models';

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
export const { schema, query } = graphqlSchema(`
  ${contacts.types}

  ${user.types}

  type Query {
    ${contacts.queries}
    ${user.queries}
  }

  type Mutation {
    ${contacts.mutations}
    ${user.mutations}
  }
  `, {
    Query: {
      ...contacts.queriesImpl,
      ...user.queriesImpl,
    },

    Mutation: {
      ...contacts.mutationsImpl,
      ...user.mutationsImpl,
    },
  });
