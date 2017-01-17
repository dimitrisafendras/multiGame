'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let ensureUser = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    const token = (0, _auth.getToken)(ctx);

    if (!token) {
      ctx.throw(401);
    }

    let decoded = null;
    try {
      decoded = (0, _jsonwebtoken.verify)(token, _config2.default.token);
    } catch (err) {
      ctx.throw(401);
    }

    const user = yield _users2.default.get(decoded.id).without('password');
    if (!user) {
      ctx.throw(401);
    }

    return next();
  });

  return function ensureUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _jsonwebtoken = require('jsonwebtoken');

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _auth = require('../auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = ensureUser;