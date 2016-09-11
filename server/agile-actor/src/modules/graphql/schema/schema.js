import graphqlSchema from 'graph.ql';
import UserModel from '../../../models/users';
import { transformUser } from '../../../modules/auth/passport/providers/local';

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
export const { schema, query } = graphqlSchema(`
  # Agile Actor user type
  type User {
    id: String!
    email: String!
    name: String
    firstName: String
    lastName: String
    displayName: String
    provider: String
    createdAt: String
  }

  type Users {
    all: [User]
  }

  type Query {
    me(): User
    user(email: String!): User
    users(): Users
  }

  type Mutation {
    createLocalUser(
      email: String!
      password: String!
      firstName: String
      lastName: String
      displayName: String
    ): User

    deleteUser(email: String!): User
  }
  `, {
    Query: {
      me: async (_, __, { user }) => {
        try {
          return await UserModel.get(user.email).run();
        } catch (err) {
          return { email: 'NO_AUTHORIZED_USER' };
        }
      },

      user: async (_, { email }) => await UserModel.get(email).run(),
      users: async () => ({
        all: await UserModel.filter({}).run(),
      }),
    },

    Mutation: {
      createLocalUser: async (
        obj,
        userAttributes,
        context,
      ) => {
        const user = new UserModel(transformUser(userAttributes));
        const newUser = await user.save();
        delete newUser.password;
        context.user = newUser;
        return newUser;
      },

      deleteUser: async (obj, { email }, context) => {
        await UserModel.get(email).delete().run();
        return { id: '', name: '' };
      },
    },
  });
