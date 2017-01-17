import serve from 'koa-static';
import config from '../config';

const { maxage } = config;

export default (app) => {
  app.use(serve(`${process.cwd()}/static`, { maxage }));
  app.use(serve(`${process.cwd()}/static/docs`, { maxage }));
};
