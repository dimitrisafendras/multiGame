'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thinky = require('../../utils/thinky');

const type = _thinky.models.type;


const Achievement = _thinky.models.createModel('Achievement', {
  type: type.string().default('Achievement')
});

exports.default = Achievement;