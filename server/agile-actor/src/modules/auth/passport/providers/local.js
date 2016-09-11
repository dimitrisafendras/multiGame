const PROVIDER = 'local';

export const transformUser = (providerUser) => {
  const {
    email,
    password,
    firstName,
    lastName,
    displayName,
    currentLoginAttempt,
  } = providerUser;

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
    currentLoginAttempt,
  };
};
