'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = undefined;

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const updateUser = exports.updateUser = (() => {
  var _ref = _asyncToGenerator(function* (provider, userData, done) {
    const transformUser = require(`./${ provider }`).transformUser;
    const updatedUser = transformUser(userData);

    if (!updatedUser) {
      return done(null, false);
    }

    const email = updatedUser.email;


    try {
      let user;
      try {
        user = yield _users2.default.get(email).run();
      } catch (err) {
        user = new _users2.default(updatedUser);
        yield user.save();
        return done(null, user);
      }

      user.merge(updatedUser).save();
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });

  return function updateUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();