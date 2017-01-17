'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = exports.prefix = undefined;

var _controller = require('./controller');

var auth = _interopRequireWildcard(_controller);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const prefix = exports.prefix = '/auth';

const test = ctx => {
  console.log(ctx.params.username);
  ctx.body = ctx.params.username;
};

const routes = exports.routes = [{
  method: 'GET',
  route: '/:username',
  handlers: [test]
}, {
  method: 'POST',
  route: '/',
  handlers: [auth.authUser]
}, {
  method: 'GET',
  route: '/unAuth',
  handlers: [auth.unAuthUser]
}, {
  method: 'GET',
  route: '/checkAuth',
  handlers: [auth.checkAuthUser]
}, {
  method: 'GET',
  route: '/google',
  handlers: [auth.authUserGoogle]
}, {
  method: 'GET',
  route: '/google/callback',
  handlers: [auth.authUserGoogleCallback]
}, {
  method: 'GET',
  route: '/github',
  handlers: [auth.authUserGithub]
}, {
  method: 'GET',
  route: '/github/callback',
  handlers: [auth.authUserGithubCallback]
}, {
  method: 'GET',
  route: '/linkedin',
  handlers: [auth.authUserLinkedin]
}, {
  method: 'GET',
  route: '/linkedin/callback',
  handlers: [auth.authUserLinkedinCallback]
}];