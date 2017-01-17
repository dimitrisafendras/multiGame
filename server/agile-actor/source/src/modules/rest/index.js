import glob from 'glob';
import Router from 'koa-router';

export default (app) => {
  glob(`${__dirname}/*/router.js`, (err, matches) => {
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

  return app;
};
