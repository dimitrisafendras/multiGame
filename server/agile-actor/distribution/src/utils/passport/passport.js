'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _passportLocal = require('passport-local');

var _passportGoogleOpenidconnect = require('passport-google-openidconnect');

var _passportGithub = require('passport-github');

var _passportLinkedinOauth = require('passport-linkedin-oauth2');

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

var _providers = require('./providers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_koaPassport2.default.serializeUser((user, done) => {
  done(null, user.id);
});

_koaPassport2.default.deserializeUser((() => {
  var _ref = _asyncToGenerator(function* (id, done) {
    try {
      const user = yield _users2.default.get(id).without('password');
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

_koaPassport2.default.use('local', new _passportLocal.Strategy({
  session: true,
  usernameField: 'email',
  passwordField: 'password'
}, (() => {
  var _ref2 = _asyncToGenerator(function* (email, password, done) {
    try {
      const user = yield _users2.default.get(email).run();

      if (!user) {
        return done(null, {
          currentLoginAttempt: {
            email: false
          }
        });
      } // done(null, false)

      try {
        const isMatch = yield user.validatePassword(password);
        if (!isMatch) {
          return done(null, {
            currentLoginAttempt: {
              email: true,
              password: false
            }
          });
        }

        delete user.password;
        done(null, _extends({}, user, {
          currentLoginAttempt: {
            email: true,
            password: true
          }
        }));
      } catch (err) {
        done(err);
      }
    } catch (err) {
      return done(null, {
        currentLoginAttempt: {
          email: false
        }
      }); // done(err);
    }
  });

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
})()));

_koaPassport2.default.use(new _passportGithub.Strategy(_config2.default.auth.github, (() => {
  var _ref3 = _asyncToGenerator(function* (token, tokenSecret, profile, done) {
    return yield (0, _providers.updateUser)('github', profile, done);
  });

  return function (_x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
})()));

_koaPassport2.default.use(new _passportGoogleOpenidconnect.Strategy(_config2.default.auth.google, (() => {
  var _ref4 = _asyncToGenerator(function* (iss, sub, profile, accessToken, refreshToken, done) {
    return yield (0, _providers.updateUser)('google', profile, done);
  });

  return function (_x10, _x11, _x12, _x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
})()));

_koaPassport2.default.use(new _passportLinkedinOauth.Strategy(_config2.default.auth.linkedin, (() => {
  var _ref5 = _asyncToGenerator(function* (token, tokenSecret, profile, done) {
    return yield (0, _providers.updateUser)('linkedin', profile, done);
  });

  return function (_x16, _x17, _x18, _x19) {
    return _ref5.apply(this, arguments);
  };
})()));

exports.default = _koaPassport2.default;