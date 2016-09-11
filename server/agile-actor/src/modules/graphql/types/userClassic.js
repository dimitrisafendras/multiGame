import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

export const User = new GraphQLObjectType({
  name: 'User',
  description: 'Agile Actor user type',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

export const Users = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    all: { type: new GraphQLList(User) },
  }),
});
