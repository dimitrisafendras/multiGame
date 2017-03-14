'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  const server = _http2.default.createServer(app.callback());
  const io = new _socket2.default(server);

  (0, _glob2.default)(`${__dirname}/*/`, (err, matches) => {
    if (err) throw err;
    matches.forEach(mod => require(mod).default(io));
  });

  return server;
};