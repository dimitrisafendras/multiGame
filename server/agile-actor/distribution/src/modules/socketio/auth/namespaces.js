'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _cookie = require('cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _models = require('../../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = console.log;

const authEventType = user => user && user.email ? 'authorization' : 'unAuthorization';

exports.default = io => {
  const sessionIo = io.of('/session');

  sessionIo.use((socket, next) => {
    const cookies = socket.request.headers.cookie;
    socket.sessionCookieId = _cookie2.default.parse(cookies)['koa.sid'];
    next();
  });

  sessionIo.on('connection', (socket, next) => {
    const sessionCookieId = socket.sessionCookieId,
          id = socket.id;

    const sid = `koa:sess:${ sessionCookieId }`;
    log('  --> SocketIO on connection', id, sessionCookieId);

    const session = (0, _models.sessionQuery)().filter({ sid }).run();
    const sessionChanged = (0, _models.sessionQuery)().filter({ sid }).changes().run();

    session.then((_ref) => {
      var _ref2 = _slicedToArray(_ref, 1),
          _ref2$ = _ref2[0];

      _ref2$ = _ref2$ === undefined ? {} : _ref2$;
      let user = _ref2$.user;

      log('  --> SocketIO on connection: r.table(sessions):', id, user);
      socket.emit(authEventType(user), user);
    }).catch(err => {
      log('  --> SocketIO on connection: r.table(sessions):', id, err);
    });

    sessionChanged.then(cursor => {
      cursor.on('error', error => {
        log('  --> SocketIO Session Query Changes Cursor', id, error);
      });

      cursor.on('data', function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { new_val: {} };

        let user = _ref3.new_val.user;

        socket.emit(authEventType(user), user);
        log('  --> SocketIO emit ', id, user);
      });
    }).catch(err => {
      log('  --> SocketIO r.table(sessions).changes():', id, err);
    });

    if (next) next();
  });
};