import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../../../config';
import thinky from '../../utils/thinky';

const { r, type } = thinky;

const User = thinky.createModel('User', {
  type: type.string().default('User'),
  name: type.string(),
  id: type.string().options({ enforce_type: 'strict' }),
  displayName: type.string(),
  email: type.string().email(),
  provider: type.string(),
  data: type.any(),
  username: type.string().options({ enforce_type: 'strict' }),
  password: type.string(),
  createdAt: type.date().default(r.now()),
});

User.pre('save', function preSave(next) {
  const { password, provider } = this;

  if (!this.isModified('password') || provider !== 'local') {
    return next();
  }

  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(salt);
    });
  })
  .then((salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) { throw new Error(err); }

      this.password = hash;

      next(null);
    });
  })
  .catch(err => next(err));
});

User.define('validatePassword', function validatePassword(password) {
  const userPassword = this.password;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, userPassword, (err, isMatch) => {
      if (err) { return reject(err); }

      resolve(isMatch);
    });
  });
});

User.define('generateToken', function generateToken() {
  const { id } = this; // user.id
  return jwt.sign({ id }, config.token);
});

User.define('isModified', function isModified(filed) {
  let oldValue = this.getOldValue();
  return !oldValue || oldValue[filed] !== this[filed];
});

export default User;
