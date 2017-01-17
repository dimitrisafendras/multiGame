'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appModules = exports.serveSpaRoutes = exports.serveStatic = exports.appSetup = exports.config = undefined;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _appSetup = require('./app-setup');

var _appSetup2 = _interopRequireDefault(_appSetup);

var _serveStatic = require('./serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _serveSpaRoutes = require('./serve-spa-routes');

var _serveSpaRoutes2 = _interopRequireDefault(_serveSpaRoutes);

var _modules = require('../src/modules');

var _modules2 = _interopRequireDefault(_modules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.config = _config2.default;
exports.appSetup = _appSetup2.default;
exports.serveStatic = _serveStatic2.default;
exports.serveSpaRoutes = _serveSpaRoutes2.default;
exports.appModules = _modules2.default;