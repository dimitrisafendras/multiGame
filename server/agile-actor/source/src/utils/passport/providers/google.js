const PROVIDER = 'google';

export const transformUser = (providerUser) => {
  const {
    id,
    displayName,
    username,
    profileUrl,
    photos,
    provider,
  } = providerUser;

  if (!id) {
    return null;
  }

  const {
    name,
    email,
  } = providerUser._json;

  const altName = email.slice(0, email.indexOf('@'));

  return {
    id: email,
    displayName: displayName || name || altName,
    email,
    name: name || altName,
    provider: PROVIDER,
  };
};
