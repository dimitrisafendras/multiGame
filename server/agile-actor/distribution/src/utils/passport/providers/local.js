'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const PROVIDER = 'local';

const transformUser = exports.transformUser = providerUser => {
  const email = providerUser.email,
        password = providerUser.password,
        firstName = providerUser.firstName,
        lastName = providerUser.lastName,
        displayName = providerUser.displayName,
        currentLoginAttempt = providerUser.currentLoginAttempt;


  const name = firstName && lastName && `${firstName} ${lastName}`;
  const altName = email && email.slice(0, email.indexOf('@'));

  return {
    id: email,
    firstName,
    lastName,
    password,
    displayName: displayName || name || altName,
    email,
    name: name || altName,
    provider: PROVIDER,
    currentLoginAttempt
  };
};