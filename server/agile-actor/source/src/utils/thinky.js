import Thinky from 'thinky';
import rethinkdb from 'rethinkdbdash';

import config from '../../config';

const r = rethinkdb(config.rethinkdb);
const rs = rethinkdb(config.rethinkdbSessions);

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
