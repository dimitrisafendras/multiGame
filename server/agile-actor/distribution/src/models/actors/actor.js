'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thinky = require('../../utils/thinky');

var _achievements = require('./achievements');

var _achievements2 = _interopRequireDefault(_achievements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const r = _thinky.models.r,
      type = _thinky.models.type;

const providersList = ['agileactors', 'google', 'github', 'linkedin', 'local'];
const emailTypes = ['personal', 'work', 'other'];
const phoneTypes = ['mobile', 'work', 'home'];

const AgileActor = _thinky.models.createModel('AgileActor', {
  type: type.string().default('AgileActor'),
  name: {
    firstName: type.string(),
    lastName: type.string(),
    middle: type.string()
  },
  gender: type.string(),
  email: type.string().email().required().options({ enforce_type: 'strict' }),
  emailIsVerified: type.boolean(),
  authProvider: type.string().enum(...providersList),
  emails: [{
    type: type.string().enum(...emailTypes),
    email: type.string().email(),
    isVerified: type.boolean(),
    authProvider: type.string().enum(...providersList)
  }],
  phones: [{
    type: type.string().enum(...phoneTypes),
    country: type.string(),
    number: type.string(),
    isVerified: type.boolean()
  }],
  displayName: type.string().default(() => undefined.name.firstName || undefined.email),

  createdAt: type.date().default(r.now()),

  roles: [{
    name: type.string(),
    from: type.date(),
    to: type.date(),
    actionTypes: [type.string()]
  }],

  achievements: [_achievements2.default],

  history: [{
    type: type.string().options({ enforce_type: 'strict' }), // action type
    payload: type.any(), // action payload
    at: type.date().default(r.now()), // timestamp
    stateBefore: {
      type: type.string(),
      instance: type.any()
    }
  }]
});

exports.default = AgileActor;