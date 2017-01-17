'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessionsModel = exports.models = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _thinky = require('thinky');

var _thinky2 = _interopRequireDefault(_thinky);

var _rethinkdbdash = require('rethinkdbdash');

var _rethinkdbdash2 = _interopRequireDefault(_rethinkdbdash);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const r = (0, _rethinkdbdash2.default)(_config2.default.rethinkdb);
const rs = (0, _rethinkdbdash2.default)(_config2.default.rethinkdbSessions);

const models = new _thinky2.default(_extends({
  r
}, _config2.default.rethinkdb));

const sessionsModel = new _thinky2.default(_extends({
  r: rs
}, _config2.default.rethinkdbSessions));

exports.models = models;
exports.sessionsModel = sessionsModel;