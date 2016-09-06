import config from '../config';
import thinky from '../src/utils/thinky';

const { r } = thinky;

export function cleanDb() {
  return r.tableList().forEach(function (table) {
    return r.table(table).delete();
  }).run();
}

export function authUser(agent, callback) {
  agent
    .post('/users')
    .set('Accept', 'application/json')
    .send({ user: { username: 'test', password: 'pass' } })
    .end((err, res) => {
      if (err) { return callback(err); }

      callback(null, {
        user: res.body.user,
        token: res.body.token,
      });
    });
}
