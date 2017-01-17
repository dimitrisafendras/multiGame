'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanDb = cleanDb;
exports.authUser = authUser;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _thinky = require('../src/utils/thinky');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const r = _thinky.models.r;
function cleanDb() {
  return r.tableList().forEach(function (table) {
    return r.table(table).delete();
  }).run();
}

function authUser(agent, callback) {
  agent.post('/users').set('Accept', 'application/json').send({ user: { username: 'test', password: 'pass' } }).end((err, res) => {
    if (err) {
      return callback(err);
    }

    callback(null, {
      user: res.body.user,
      token: res.body.token
    });
  });
}