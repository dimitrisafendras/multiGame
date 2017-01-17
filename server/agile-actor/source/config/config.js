import common from './env/common';

const env = process.env.NODE_ENV || 'development';
const defaultConfig = require(`./env/${env}`).default;

export default (config) => {
  const updatedConfig = { ...common, ...defaultConfig, ...(config || {}) };
  const { user, recipient } = updatedConfig.emailServer;

  updatedConfig.emailMessage = text => ({
    text,
    from: user,
    to: recipient,
    subject: 'Contact Form Email ',
  });

  return updatedConfig;
};
