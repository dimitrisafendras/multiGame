'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const host = '127.0.0.1';
const port = 5000;

const config = {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'agileactors'
  },
  rethinkdbSessions: {
    host: 'localhost',
    port: 28015,
    db: 'sessions'
  },
  auth: {
    github: {
      clientID: 'af1d064fd8e70c6f75bd',
      clientSecret: '7533db68be7a9dce2b41ff36c09e799129c0fa32',
      callbackURL: `http://${host}:${port}/auth/github/callback`
    },
    google: {
      clientID: '905278307733-amcaml9t4nedcf25cc2ruj6r4o7cf9id.apps.googleusercontent.com',
      clientSecret: '-AlX305dqdTBtIeZZYJHoGhI',
      callbackURL: `http://${host}:${port}/auth/google/callback`
    },
    linkedin: {
      clientID: '77dobssvg2ppek',
      clientSecret: 'CdS78OlqH4vKLjsy',
      callbackURL: `http://${host}:${port}/auth/linkedin/callback`
    }
  },
  emailServer: {
    user: 'postmaster@agileactors.com',
    password: 'b0cfcc3a5c06b6c77d9ff95214248c72',
    host: 'smtp.mailgun.org',
    ssl: true,
    recipient: 'services@agileactors.com'
  }
};

exports.default = _extends({}, config, { host, port });