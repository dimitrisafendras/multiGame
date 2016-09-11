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
app = appModules(app);

app.listen(config.port, () => {
  console.log(`Server started on ${config.port}`);
});

const server = app;
export default server;
