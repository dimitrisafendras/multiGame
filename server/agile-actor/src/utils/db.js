import rethinkdb from 'rethinkdbdash';

import config from '../../config';

const r = rethinkdb(config.rethinkdb);

export default r;
