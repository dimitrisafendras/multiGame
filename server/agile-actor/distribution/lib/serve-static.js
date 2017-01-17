'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const maxage = _config2.default.maxage;

exports.default = app => {
  app.use((0, _koaStatic2.default)(`${ process.cwd() }/static`, { maxage }));
  app.use((0, _koaStatic2.default)(`${ process.cwd() }/static/docs`, { maxage }));
};