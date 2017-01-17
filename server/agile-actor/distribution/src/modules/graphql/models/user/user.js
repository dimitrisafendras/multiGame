'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationsImpl = exports.queriesImpl = undefined;

var _users = require('../../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _local = require('../../../../utils/passport/providers/local');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const queriesImpl = {
  me: (() => {
    var _ref = _asyncToGenerator(function* (_, __, _ref2) {
      let email = _ref2.user.email;
      return yield _users2.default.get(email).run();
    });

    return function me(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })(),
  user: (() => {
    var _ref3 = _asyncToGenerator(function* (_, _ref4) {
      let email = _ref4.email;
      return yield _users2.default.get(email).run();
    });

    return function user(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  })(),
  users: (() => {
    var _ref5 = _asyncToGenerator(function* () {
      return {
        all: yield _users2.default.filter({}).run()
      };
    });

    return function users() {
      return _ref5.apply(this, arguments);
    };
  })()
};

const mutationsImpl = {
  createLocalUser: (() => {
    var _ref6 = _asyncToGenerator(function* (obj, userAttributes, context) {
      const user = new _users2.default((0, _local.transformUser)(userAttributes));
      const newUser = yield user.save();
      delete newUser.password;
      context.user = newUser;
      return newUser;
    });

    return function createLocalUser(_x6, _x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  })(),

  deleteUser: (() => {
    var _ref7 = _asyncToGenerator(function* (obj, _ref8) {
      let email = _ref8.email;

      yield _users2.default.get(email).delete().run();
      return { id: '', name: '' };
    });

    return function deleteUser(_x9, _x10) {
      return _ref7.apply(this, arguments);
    };
  })()
};

exports.queriesImpl = queriesImpl;
exports.mutationsImpl = mutationsImpl;