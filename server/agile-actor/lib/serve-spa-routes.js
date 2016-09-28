import Router from 'koa-router';

const sapRoutes = [
  '/User',
  '/Careers',
  '/Organizations',
  '/About',
  '/Contact',
  '/User',
];

export default (app) => {
  const router = new Router();

  sapRoutes.forEach(route => router.redirect(route, '/', 304));

  app.use(router.routes());
};
