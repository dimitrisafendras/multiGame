'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const PROVIDER = 'google';

const transformUser = exports.transformUser = providerUser => {
  const id = providerUser.id,
        displayName = providerUser.displayName,
        username = providerUser.username,
        profileUrl = providerUser.profileUrl,
        photos = providerUser.photos,
        provider = providerUser.provider;


  if (!id) {
    return null;
  }

  var _providerUser$_json = providerUser._json;
  const name = _providerUser$_json.name,
        email = _providerUser$_json.email;


  const altName = email.slice(0, email.indexOf('@'));

  return {
    id: email,
    displayName: displayName || name || altName,
    email,
    name: name || altName,
    provider: PROVIDER
  };
};