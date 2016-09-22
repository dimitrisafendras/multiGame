import Koa from 'koa';

import {
  config,
  appSetup,
  appModules,
  serveStatic,
} from '../lib';

let app = new Koa();

appSetup(app);
serveStatic(app);
const server = appModules(app);

server.listen(config.port, () => {
  console.log(`Server started on ${config.port}`);
});

export default server;
