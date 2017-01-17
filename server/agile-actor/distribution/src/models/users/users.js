'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _thinky = require('../../utils/thinky');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const r = _thinky.models.r,
      type = _thinky.models.type;


const User = _thinky.models.createModel('User', {
  type: type.string().default('User'),
  name: type.string(),
  id: type.string().options({ enforce_type: 'strict' }),
  displayName: type.string(),
  email: type.string().email(),
  provider: type.string(),
  data: type.any(),
  username: type.string().options({ enforce_type: 'strict' }),
  password: type.string(),
  createdAt: type.date().default(r.now())
});

User.pre('save', function (next) {
  const password = this.password,
        provider = this.provider;


  if (!this.isModified('password') || provider !== 'local') {
    next();
    return;
  }

  new Promise((resolve, reject) => {
    _bcrypt2.default.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(salt);
    });
  }).then(salt => {
    _bcrypt2.default.hash(password, salt, (err, hash) => {
      if (err) {
        throw new Error(err);
      }

      this.password = hash;

      next(null);
    });
  }).catch(err => next(err));
});

User.define('validatePassword', function validatePassword(password) {
  const userPassword = this.password;

  return new Promise((resolve, reject) => {
    _bcrypt2.default.compare(password, userPassword, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      resolve(isMatch);
    });
  });
});

User.define('generateToken', function generateToken() {
  const id = this.id; // user.id

  return _jsonwebtoken2.default.sign({ id }, _config2.default.token);
});

User.define('isModified', function isModified(filed) {
  const oldValue = this.getOldValue();
  return !oldValue || oldValue[filed] !== this[filed];
});

exports.default = User;