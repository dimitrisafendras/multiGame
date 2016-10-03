import rethinkdb from 'rethinkdbdash';

import config from '../../config';

const r = rethinkdb(config.rethinkdb);

const rs = rethinkdb(config.rethinkdbSessions);

export {
  r,
  rs,
};
