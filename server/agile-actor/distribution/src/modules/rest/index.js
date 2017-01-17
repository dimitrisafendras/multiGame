'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = app => {
  (0, _glob2.default)(`${ __dirname }/*/router.js`, (err, matches) => {
    if (err) {
      throw err;
    }

    matches.forEach(mod => {
      var _require = require(mod);

      const routes = _require.routes,
            prefix = _require.prefix;

      const router = new _koaRouter2.default({ prefix });

      routes.forEach((_ref) => {
        var _ref$method = _ref.method;
        let method = _ref$method === undefined ? '' : _ref$method;
        var _ref$route = _ref.route;
        let route = _ref$route === undefined ? '' : _ref$route;
        var _ref$handlers = _ref.handlers;
        let handlers = _ref$handlers === undefined ? [] : _ref$handlers;

        const lastHandler = handlers.pop();

        router[method.toLowerCase()](route, ...handlers, (() => {
          var _ref2 = _asyncToGenerator(function* (ctx) {
            return yield lastHandler(ctx);
          });

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        })());

        app.use(router.routes()).use(router.allowedMethods());
      });
    });
  });

  return app;
};