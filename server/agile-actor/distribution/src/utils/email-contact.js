'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _email = require('emailjs/email');

var _email2 = _interopRequireDefault(_email);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emailServer = _config2.default.emailServer,
      emailMessage = _config2.default.emailMessage;


const mailServer = _email2.default.server.connect(emailServer);

const emailContact = (_ref) => {
  let name = _ref.name,
      email = _ref.email,
      subject = _ref.subject,
      message = _ref.message;

  const messageText = `
    ${ name }
    ${ email }
    ${ subject }
    ${ message }
  `;

  return new Promise((resolve, reject) => {
    mailServer.send(emailMessage(messageText), (err, msg) => {
      console.log(' --> EmailContact: ', err || msg);
      if (err) {
        reject(err);
      } else {
        resolve(msg);
      }
    });
  });
};

exports.default = emailContact;