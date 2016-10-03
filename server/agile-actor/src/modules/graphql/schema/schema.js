import graphqlSchema from 'graph.ql';
import User from '../../../models/users';
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

  # Array of User type elements
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
      me: async (
        _,
        __,
        { user: { email } }
      ) => await User.get(email).run(),
      user: async (
        _,
        { email }
      ) => await User.get(email).run(),
      users: async () => ({
        all: await User.filter({}).run(),
      }),
    },

    Mutation: {
      createLocalUser: async (
        obj,
        userAttributes,
        context,
      ) => {
        const user = new User(transformUser(userAttributes));
        const newUser = await user.save();
        delete newUser.password;
        context.user = newUser;
        return newUser;
      },

      deleteUser: async (obj, { email }) => {
        await User.get(email).delete().run();
        return { id: '', name: '' };
      },
    },
  });
