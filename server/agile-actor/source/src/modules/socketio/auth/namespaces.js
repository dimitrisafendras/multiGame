import cookie from 'cookie';

import { sessionQuery } from '../../../models';

const log = console.log;

const authEventType = user => (
 (user && user.email) ? 'authorization' : 'unAuthorization'
);

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
   log('  --> SocketIO on connection', id, sessionCookieId);


   socket.on('newAction', (action) => {
     console.log('Emiting Action');
     socket.broadcast.emit('dispachAction', action);

     console.log('Action Emited');
   }
   );

   if (next) next();
 });
};

