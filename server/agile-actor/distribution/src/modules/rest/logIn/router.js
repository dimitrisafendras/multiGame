'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.prefix = undefined;

var _controller = require('./controller');

var logIn = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const prefix = exports.prefix = '/logIn';

const routes = exports.routes = [{
  method: 'GET',
  route: '/:username',
  handlers: [logIn.checkUser]
}];