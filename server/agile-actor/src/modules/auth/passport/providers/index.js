import User from '../../../../models/users';

export const updateUser = async (provider, userData, done) => {
  const transformUser = require(`./${provider}`).transformUser;
  const updatedUser = transformUser(userData);

  if (!updatedUser) {
    return done(null, false);
  }

  const { email } = updatedUser;

  try {
    let user;
    try {
      user = await User.get(email).run();
    } catch (err) {
      user = new User(updatedUser);
      await user.save();
      return done(null, user);
    }

    user.merge(updatedUser).save();
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};
