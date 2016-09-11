import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import { User, Users } from '../types/user';
import UserModel from '../../models/users';

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: User,
        args: { id: { type: GraphQLString } },
        resolve: async (_, { id }) => UserModel.get(id).run(),
      },
      users: {
        type: Users,
        resolve: async () => ({
          all: UserModel.filter({}).run(),
        }),
      },
    },
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: {
        type: User,
        args: {
          name: {
            name: 'name',
            type: GraphQLString,
          },
          password: {
            name: 'password',
            type: GraphQLString,
          },
        },
        resolve: async (obj, { name, password }, source, fieldASTs) => {
          const user = new UserModel({ name, password });
          await user.save();
          const { id } = user;
          return { id, name };
        },
      },

      deleteUser: {
        type: User,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: async (obj, { id }, source, fieldASTs) => {
          await UserModel.get(id).delete().run();
          return { id, name: '' };
        },
      },
    },
  }),
});
