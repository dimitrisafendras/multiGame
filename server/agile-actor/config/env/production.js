export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'agileactors',
  },
  auth: {
    github: {
      clientID: 'af1d064fd8e70c6f75bd',
      clientSecret: '7533db68be7a9dce2b41ff36c09e799129c0fa32',
      callbackURL: 'http://127.0.0.1:5000/auth/github/callback',
    },
    google: {
      clientID: '905278307733-amcaml9t4nedcf25cc2ruj6r4o7cf9id.apps.googleusercontent.com',
      clientSecret: '-AlX305dqdTBtIeZZYJHoGhI',
      callbackURL: 'http://127.0.0.1:5000/auth/google/callback',
    },
    linkedin: {
      clientID: '77dobssvg2ppek',
      clientSecret: 'CdS78OlqH4vKLjsy',
      callbackURL: 'http://localhost:5000/auth/linkedin/callback',
    },
  },
};
