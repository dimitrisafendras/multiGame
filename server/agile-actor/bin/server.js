import Koa from 'koa';

import {
  config,
  appSetup,
  appModules,
  serveStatic,
  serveSpaRoutes,
} from '../lib';

const app = new Koa();

appSetup(app);
serveSpaRoutes(app);
serveStatic(app);
const server = appModules(app);

server.listen(config.port, () => {
  console.log(`Server started on ${config.port}`);
});

export default server;
