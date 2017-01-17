import recruitement from './controller';

export const prefix = '/recruitement';

export const routes = [{
  method: 'GET',
  route: '/:service?/:shortCode?/:subService?/:subShortCode?',
  handlers: [
    recruitement,
  ],
}];
