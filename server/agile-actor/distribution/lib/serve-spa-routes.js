'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const sapRoutes = _config2.default.sapRoutes;

exports.default = app => {
  app.use((() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
      if (sapRoutes.includes(ctx.url)) {
        ctx.req.url = '/';
      }
      yield next();
      if (ctx.status === 404) {
        ctx.redirect('/');
      }
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());
};