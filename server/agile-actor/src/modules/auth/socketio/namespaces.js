import cookie from 'cookie';

import sessionStoreDB from '../../../../src/utils/db';

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

    socket.emit('authUnauth');

    sessionStoreDB
    .db('sessions')
    .table('sessions')
    .filter({ sid })
    .changes()
    .run()
    .then((cursor) => {
      cursor.on('data', (newUserLogin) => {
        socket.emit('authUnauth', newUserLogin.new_val.user);

        console.log('  --> SocketIO emit authUnauth', id, newUserLogin.new_val);
      });
    });

    if (next) next();
  });
};
