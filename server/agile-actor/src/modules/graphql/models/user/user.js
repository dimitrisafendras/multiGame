import User from '../../../../models/users';
import {
  transformUser,
} from '../../../../modules/auth/passport/providers/local';

const queriesImpl = {
  me: async (
    _,
    __,
    { user: { email } }
  ) => await User.get(email).run(),
  user: async (
    _,
    { email }
  ) => await User.get(email).run(),
  users: async () => ({
    all: await User.filter({}).run(),
  }),
};

const mutationsImpl = {
  createLocalUser: async (
    obj,
    userAttributes,
    context,
  ) => {
    const user = new User(transformUser(userAttributes));
    const newUser = await user.save();
    delete newUser.password;
    context.user = newUser;
    return newUser;
  },

  deleteUser: async (obj, { email }) => {
    await User.get(email).delete().run();
    return { id: '', name: '' };
  },
};

export {
  queriesImpl,
  mutationsImpl,
};
