'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _common = require('./env/common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = process.env.NODE_ENV || 'development';
const defaultConfig = require(`./env/${env}`).default;

exports.default = config => {
  const updatedConfig = _extends({}, _common2.default, defaultConfig, config || {});
  var _updatedConfig$emailS = updatedConfig.emailServer;
  const user = _updatedConfig$emailS.user,
        recipient = _updatedConfig$emailS.recipient;


  updatedConfig.emailMessage = text => ({
    text,
    from: user,
    to: recipient,
    subject: 'Contact Form Email '
  });

  return updatedConfig;
};