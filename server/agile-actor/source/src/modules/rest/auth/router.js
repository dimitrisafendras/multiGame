import * as auth from './controller';

export const prefix = '/auth';

const test = (ctx) =>{
  console.log(ctx.params.username);
  ctx.body = ctx.params.username;
};

export const routes = [
  {
    method: 'GET',
    route: '/:username',
    handlers: [
      test,
    ],
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      auth.authUser,
    ],
  },
  {
    method: 'GET',
    route: '/unAuth',
    handlers: [
      auth.unAuthUser,
    ],
  },
  {
    method: 'GET',
    route: '/checkAuth',
    handlers: [
      auth.checkAuthUser,
    ],
  },
  {
    method: 'GET',
    route: '/google',
    handlers: [
      auth.authUserGoogle,
    ],
  },
  {
    method: 'GET',
    route: '/google/callback',
    handlers: [
      auth.authUserGoogleCallback,
    ],
  },
  {
    method: 'GET',
    route: '/github',
    handlers: [
      auth.authUserGithub,
    ],
  },
  {
    method: 'GET',
    route: '/github/callback',
    handlers: [
      auth.authUserGithubCallback,
    ],
  },
  {
    method: 'GET',
    route: '/linkedin',
    handlers: [
      auth.authUserLinkedin,
    ],
  },
  {
    method: 'GET',
    route: '/linkedin/callback',
    handlers: [
      auth.authUserLinkedinCallback,
    ],
  },
];
