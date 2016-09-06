import config from '../../config';
import rethinkdb from 'rethinkdbdash';

export default rethinkdb(config.rethinkdb); // export connection
