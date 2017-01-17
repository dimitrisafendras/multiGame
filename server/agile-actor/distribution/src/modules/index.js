'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rest = require('./rest');

var _rest2 = _interopRequireDefault(_rest);

var _socketio = require('./socketio');

var _socketio2 = _interopRequireDefault(_socketio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => (0, _socketio2.default)((0, _rest2.default)(app));