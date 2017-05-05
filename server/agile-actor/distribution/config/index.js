'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const configFile = process.env.AGILE_ACTOR_CONFIG_FILE;
let configObject = {};

if (configFile) {
  try {
    const configData = _fs2.default.readFileSync(configFile, 'utf8');
    configObject = JSON.parse(configData || '{}');
  } catch (err) {
    console.warn(`--> Config File : ${configFile} NOT FOUNT continue with default confing`);
  }
}

exports.default = (0, _config2.default)(configObject);