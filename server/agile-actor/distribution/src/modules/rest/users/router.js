'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.prefix = undefined;

var _middleware = require('../../../utils/middleware');

var _controller = require('./controller');

var user = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const prefix = exports.prefix = '/users';

const routes = exports.routes = [{
  method: 'POST',
  route: '/',
  handlers: [user.createUser]
}, {
  method: 'GET',
  route: '/',
  handlers: [_middleware.ensureUser, user.getUsers]
}, {
  method: 'GET',
  route: '/:id',
  handlers: [_middleware.ensureUser, user.getUser]
}, {
  method: 'PUT',
  route: '/:id',
  handlers: [_middleware.ensureUser, user.getUser, user.updateUser]
}, {
  method: 'DELETE',
  route: '/:id',
  handlers: [_middleware.ensureUser, user.getUser, user.deleteUser]
}];