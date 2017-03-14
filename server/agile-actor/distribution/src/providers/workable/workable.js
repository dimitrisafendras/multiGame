'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _config2.default.workable || {};

const serviceUrl = _ref.serviceUrl,
      type = _ref.type,
      token = _ref.token;


const headers = {
  Authorization: `${type} ${token}`
};

const url = params => serviceUrl ? [serviceUrl, ...Object.values(params)].join('/') : 'none';

const request = params => _axios2.default.get(url(params), {
  headers
}).then((_ref2) => {
  let data = _ref2.data;
  return data;
}).catch(() => ({
  status: 'Workable invocation error: check config and workable availability'
}));

exports.default = request;