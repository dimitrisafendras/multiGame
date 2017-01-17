import Email from 'emailjs/email';
import config from '../../config';

const {
  emailServer,
  emailMessage,
} = config;

const mailServer = Email.server.connect(emailServer);

const emailContact = ({ name, email, subject, message }) => {
  const messageText = `
    ${name}
    ${email}
    ${subject}
    ${message}
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

export default emailContact;
