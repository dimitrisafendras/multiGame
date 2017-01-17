'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.prefix = undefined;

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaGraphql = require('koa-graphql');

var _koaGraphql2 = _interopRequireDefault(_koaGraphql);

var _schema = require('../../graphql/schema');

var _config = require('../../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const graphiql = _config2.default.graphiql;
const prefix = exports.prefix = '/graphql';

const routes = exports.routes = [{
  method: 'all',
  route: '/',
  handlers: [(0, _koaConvert2.default)((0, _koaGraphql2.default)((request, _ref) => {
    let session = _ref.session;
    return {
      schema: _schema.schema,
      context: session,
      graphiql
    };
  }))]
}];