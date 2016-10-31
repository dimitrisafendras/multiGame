import config from '../config';

const { sapRoutes } = config;

export default (app) => {
  app.use(async (ctx, next) => {
    if (sapRoutes.includes(ctx.url)) {
      ctx.req.url = '/';
    }
    return next();
  });
};
