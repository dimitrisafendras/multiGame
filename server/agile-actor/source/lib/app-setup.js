import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import convert from 'koa-convert';
import logger from 'koa-logger';
import koaSession from 'koa-generic-session';
import RethinkSession from 'koa-generic-session-rethinkdb';
import { Z_SYNC_FLUSH } from 'zlib';

import config from '../config';
import { errorMiddleware } from '../src/utils/middleware';

import passport from '../src/utils/passport';
import { sessionsModel } from '../src/utils/thinky';

export default (app) => {
  app.keys = [config.session];

  const sessionStore = new RethinkSession({
    connection: sessionsModel.r, // DB connection
  });
  sessionStore.setup(); // create the db, table and indexes to store sessions

  const session = koaSession({
    store: sessionStore,
    secret: app.keys,
    resave: true,
    saveUninitialized: true,
  });

  app.use(convert(logger()));

  app.use(compress({
    filter: contentType => (
      /text/i.test(contentType) || /javascript/i.test(contentType)
    ),
    threshold: 2048,
    flush: Z_SYNC_FLUSH,
  }));

  app.use(convert(bodyParser({
    detectJSON: ctx => /\.json$/i.test(ctx.path),
  })));
  app.use(convert(session));
  app.use(errorMiddleware());

  app.use(passport.initialize());
  app.use(passport.session());
};
