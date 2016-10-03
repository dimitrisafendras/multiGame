import Thinky from 'thinky';
import r from './db';
import config from '../../config';

const sessionsModel = new Thinky({
  r,
  ...config.rethinkdbSessions,
});

const models = new Thinky({
  r,
  ...config.rethinkdb,
});

export {
  sessionsModel,
  models,
};

export default models;
