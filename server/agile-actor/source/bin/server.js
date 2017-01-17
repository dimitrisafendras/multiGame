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
  console.log(` -- Agile Actor Server started on port ${config.port}`);
});

export default server;
