import io from 'socket.io-client';

export const authSocket = io('/session');
export const clientConfigSocket = io('/clientConfig');
