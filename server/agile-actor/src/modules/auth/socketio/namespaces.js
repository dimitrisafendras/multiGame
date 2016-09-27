import cookie from 'cookie';

import r from '../../../../src/utils/db';

export default (io) => {
  const sessionIo = io.of('/session');

  sessionIo.use((socket, next) => {
    const cookies = socket.request.headers.cookie;
    socket.sessionCookieId = cookie.parse(cookies)['koa.sid'];
    next();
  });

  sessionIo.on('connection', (socket, next) => {
    const { sessionCookieId, id } = socket;
    const sid = `koa:sess:${sessionCookieId}`;
    console.log('  --> SocketIO on connection', id, sessionCookieId);

    r
    .db('sessions')
    .table('sessions')
    .filter({ sid })
    .run()
    .then(([sessionData]) => {
      console.log('  --> SocketIO on connection - Access DB sessions query', id, sessionData);
      if (!sessionData) return;

      if (sessionData.user && sessionData.user.email) {
        socket.emit('authorization', sessionData.user);
      } else {
        socket.emit('unAuthorization', sessionData.user);
      }
    })
    .catch((err) => {
      console.log('  --> SocketIO on connection - Access DB sessions query', id, err);
    });

    r
    .db('sessions')
    .table('sessions')
    .filter({ sid })
    .changes()
    .run()
    .then((cursor) => {
      cursor.on('error', (error) => {
        console.log('  --> SocketIO Session Query Changes Cursor', id, error);
      });

      cursor.on('data', ({ new_val }) => {
        if (!new_val) return;

        if (new_val.user && new_val.user.email) {
          socket.emit('authorization', new_val.user);
          console.log('  --> SocketIO emit authorization', id, new_val.user);
        } else {
          socket.emit('unAuthorization', new_val.user);
          console.log('  --> SocketIO emit unAuthorization', id, new_val.user);
        }
      });
    })
    .catch((err) => {
      console.log('  --> SocketIO on connection - Access DB Sessions Changes query', id, err);
    });

    if (next) next();
  });
};
