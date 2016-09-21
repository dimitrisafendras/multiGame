import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import logger from 'koa-logger';
import koaSession from 'koa-generic-session';
import RethinkSession from 'koa-generic-session-rethinkdb';

import config from '../config';
import { errorMiddleware } from '../src/middleware';

import passport from '../src/modules/auth/passport';
import r from '../src/utils/db';

export default (app) => {
  app.keys = [config.session];

  const sessionStore = new RethinkSession({
    connection: r, // DB connection
  });
  sessionStore.setup(); // create the db, table and indexes to store sessions

  const session = koaSession({
    store: sessionStore,
    secret: app.keys,
    resave: true,
    saveUninitialized: true,
  });

  app.use(convert(logger()));
  app.use(convert(bodyParser({
    detectJSON: ctx => /\.json$/i.test(ctx.path),
  })));
  app.use(convert(session));
  app.use(errorMiddleware());

  app.use(passport.initialize());
  app.use(passport.session());
};
