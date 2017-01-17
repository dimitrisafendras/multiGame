'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.prefix = undefined;

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const prefix = exports.prefix = '/recruitement';

const routes = exports.routes = [{
  method: 'GET',
  route: '/:service?/:shortCode?/:subService?/:subShortCode?',
  handlers: [_controller2.default]
}];