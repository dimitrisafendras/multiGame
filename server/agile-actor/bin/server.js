import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import logger from 'koa-logger';
import session from 'koa-generic-session';
import mount from 'koa-mount';
import serve from 'koa-static';
import graphQLHTTP from 'koa-graphql';

import config from '../config';
import passport from '../src/modules/auth/passport';

import { errorMiddleware } from '../src/middleware';
import modules from '../src/modules';

import { schema } from '../src/graphql/schema';

const app = new Koa();
app.keys = [config.session];

app.use(convert(logger()));
app.use(bodyParser());
app.use(convert(session()));
app.use(errorMiddleware());

app.use(mount('/', serve(`${process.cwd()}/docs`)));
app.use(passport.initialize());
app.use(passport.session());

modules(app);

app.use(mount('/graphql', convert(graphQLHTTP((request, { session }) => ({
  schema,
  context: session,
  graphiql: true,
})))));

app.listen(config.port, () => {
  console.log(`Server started on ${config.port}`);
});

export default app;
