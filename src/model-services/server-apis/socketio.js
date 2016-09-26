import io from 'socket.io-client';

const session = io('/session');

export const authSocket = session;
