import * as logIn from './controller';

export const prefix = '/logIn';

export const routes = [
  {
    method: 'GET',
    route: '/:username',
    handlers: [
      logIn.checkUser,
    ],
  },
];
