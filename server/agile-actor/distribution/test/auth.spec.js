'use strict';

var _server = require('../bin/server');

var _server2 = _interopRequireDefault(_server);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _chai.should)();
const request = _supertest2.default.agent(_server2.default.listen());
const context = {};

describe('Auth', () => {
  before(done => {
    (0, _utils.cleanDb)().then(() => {
      (0, _utils.authUser)(request, (err, _ref) => {
        let user = _ref.user,
            token = _ref.token;

        if (err) {
          return done(err);
        }

        context.user = user;
        context.token = token;
        done();
      });
    });
  });

  describe('POST /auth', () => {
    it('should throw 401 if credentials are incorrect', done => {
      request.post('/auth').set('Accept', 'application/json').send({ username: 'supercoolname', password: 'wrongpassword' }).expect(401, done);
    });

    it('should auth user', done => {
      request.post('/auth').set('Accept', 'application/json').send({ username: 'test', password: 'pass' }).expect(200, (err, res) => {
        if (err) {
          return done(err);
        }

        res.body.user.should.have.property('username');
        res.body.user.username.should.equal('test');
        (0, _chai.expect)(res.body.user.password).to.not.exist;

        context.user = res.body.user;
        context.token = res.body.token;

        done();
      });
    });
  });
});