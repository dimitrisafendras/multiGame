import config from '../config';
import appSetup from './app-setup';
import appModules from '../src/modules';
import serveStatic from './serve-static';
import serveSpaRoutes from './serve-spa-routes';

export {
  appSetup,
  appModules,
  config,
  serveStatic,
  serveSpaRoutes,
};
