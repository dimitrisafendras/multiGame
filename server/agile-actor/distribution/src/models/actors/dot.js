'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _thinky = require('../../utils/thinky');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const type = _thinky.models.type;


const Dot = _thinky.models.createModel('Dot', {
  type: type.string().default('Dot')
});

exports.default = Dot;