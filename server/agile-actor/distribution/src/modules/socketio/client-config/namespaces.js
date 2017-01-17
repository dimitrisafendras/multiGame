'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config$clientConfig = _config2.default.clientConfig;
const clientConfig = _config$clientConfig === undefined ? {} : _config$clientConfig;

exports.default = io => {
  const sessionIo = io.of('/clientConfig');

  sessionIo.on('connection', (socket, next) => {
    socket.emit('clientConfig', clientConfig);
    if (next) next();
  });
};