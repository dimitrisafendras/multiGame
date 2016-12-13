import io from 'socket.io-client';

export const authSocket = io('/session');
