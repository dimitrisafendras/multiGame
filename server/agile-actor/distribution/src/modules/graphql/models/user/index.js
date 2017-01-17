'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationsImpl = exports.queriesImpl = exports.mutations = exports.queries = exports.types = undefined;

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _queriesMutations = require('./queries-mutations');

var _user = require('./user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.types = _types2.default;
exports.queries = _queriesMutations.queries;
exports.mutations = _queriesMutations.mutations;
exports.queriesImpl = _user.queriesImpl;
exports.mutationsImpl = _user.mutationsImpl;