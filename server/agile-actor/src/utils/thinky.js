import Thinky from 'thinky';
import {
  r,
  rs,
} from './db';
import config from '../../config';

const models = new Thinky({
  r,
  ...config.rethinkdb,
});

const sessionsModel = new Thinky({
  r: rs,
  ...config.rethinkdbSessions,
});

export {
  models,
  sessionsModel,
};
