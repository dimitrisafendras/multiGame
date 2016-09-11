import serve from 'koa-static';

export default (app) => {
  app.use(serve(`${process.cwd()}/static`));
  app.use(serve(`${process.cwd()}/static/docs`));
};
