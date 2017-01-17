'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _lib = require('../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

(0, _lib.appSetup)(app);
(0, _lib.serveSpaRoutes)(app);
(0, _lib.serveStatic)(app);
const server = (0, _lib.appModules)(app);

server.listen(_lib.config.port, () => {
  console.log(` -- Agile Actor Server started on port ${ _lib.config.port }`);
});

exports.default = server;