'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = exports.User = undefined;

var _graphql = require('graphql');

const User = exports.User = new _graphql.GraphQLObjectType({
  name: 'User',
  description: 'Agile Actor user type',
  fields: {
    id: { type: _graphql.GraphQLString },
    name: { type: _graphql.GraphQLString }
  }
});

const Users = exports.Users = new _graphql.GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    all: { type: new _graphql.GraphQLList(User) }
  })
});