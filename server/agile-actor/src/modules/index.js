import glob from 'glob';
import Router from 'koa-router';
import http from 'http';
import IO from 'socket.io';

export default (app) => {
  glob(`${__dirname}/*/rest/router.js`, (err, matches) => {
    if (err) {
      throw err;
    }

    matches.forEach((mod) => {
      const { routes, prefix } = require(mod);
      const router = new Router({ prefix });

      routes.forEach(({
        method = '',
        route = '',
        handlers = [],
      }) => {
        const lastHandler = handlers.pop();

        router[method.toLowerCase()](
          route,
          ...handlers,
          async (ctx) => await lastHandler(ctx),
        );

        app
        .use(router.routes())
        .use(router.allowedMethods());
      });
    });
  });

  //
  // Socket IO event management
  //
  const server = http.createServer(app.callback());
  const io = new IO(server);

  glob(`${__dirname}/*/socketio`, (err, matches) => {
    if (err) {
      throw err;
    }

    matches.forEach((mod) => {
      const namespaces = require(mod).default;
      namespaces(io);
    });
  });

  return server;
};
