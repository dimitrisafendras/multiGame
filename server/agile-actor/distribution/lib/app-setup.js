'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaGenericSession = require('koa-generic-session');

var _koaGenericSession2 = _interopRequireDefault(_koaGenericSession);

var _koaGenericSessionRethinkdb = require('koa-generic-session-rethinkdb');

var _koaGenericSessionRethinkdb2 = _interopRequireDefault(_koaGenericSessionRethinkdb);

var _zlib = require('zlib');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../src/utils/middleware');

var _passport = require('../src/utils/passport');

var _passport2 = _interopRequireDefault(_passport);

var _thinky = require('../src/utils/thinky');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.keys = [_config2.default.session];

  const sessionStore = new _koaGenericSessionRethinkdb2.default({
    connection: _thinky.sessionsModel.r });
  sessionStore.setup(); // create the db, table and indexes to store sessions

  const session = (0, _koaGenericSession2.default)({
    store: sessionStore,
    secret: app.keys,
    resave: true,
    saveUninitialized: true
  });

  app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));

  app.use((0, _koaCompress2.default)({
    filter: contentType => /text/i.test(contentType) || /javascript/i.test(contentType),
    threshold: 2048,
    flush: _zlib.Z_SYNC_FLUSH
  }));

  app.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)({
    detectJSON: ctx => /\.json$/i.test(ctx.path)
  })));
  app.use((0, _koaConvert2.default)(session));
  app.use((0, _middleware.errorMiddleware)());

  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());
};