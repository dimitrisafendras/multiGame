'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contacts = exports.user = undefined;

var _user = require('../models/user');

var user = _interopRequireWildcard(_user);

var _contacts = require('../models/contacts');

var contacts = _interopRequireWildcard(_contacts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.user = user;
exports.contacts = contacts;