'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationsImpl = exports.queriesImpl = undefined;

var _emailContact = require('../../../../utils/email-contact');

var _emailContact2 = _interopRequireDefault(_emailContact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const queriesImpl = {};

const mutationsImpl = {
  createContactMessage: (() => {
    var _ref = _asyncToGenerator(function* (_, _ref2) {
      let email = _ref2.email,
          name = _ref2.name,
          subject = _ref2.subject,
          message = _ref2.message;

      try {
        yield (0, _emailContact2.default)({ email, name, subject, message });
        return {
          status: 'ok',
          email,
          name,
          subject,
          message
        };
      } catch (err) {
        return {
          status: 'error'
        };
      }
    });

    return function createContactMessage(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })()
};

exports.queriesImpl = queriesImpl;
exports.mutationsImpl = mutationsImpl;