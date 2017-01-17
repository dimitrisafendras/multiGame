'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports.schema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graph = require('graph.ql');

var _graph2 = _interopRequireDefault(_graph);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
var _graphqlSchema = (0, _graph2.default)(`
  ${ _models.contacts.types }

  ${ _models.user.types }

  type Query {
    ${ _models.contacts.queries }
    ${ _models.user.queries }
  }

  type Mutation {
    ${ _models.contacts.mutations }
    ${ _models.user.mutations }
  }
  `, {
  Query: _extends({}, _models.contacts.queriesImpl, _models.user.queriesImpl),

  Mutation: _extends({}, _models.contacts.mutationsImpl, _models.user.mutationsImpl)
});

const schema = _graphqlSchema.schema,
      query = _graphqlSchema.query;
exports.schema = schema;
exports.query = query;