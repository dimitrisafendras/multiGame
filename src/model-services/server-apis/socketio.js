import io from 'socket.io-client';

export const authSocket = io('/session');
export const clientConfigSocket = io('/clientConfig');
export const ticTacToeSocket = io('/ticTacToe');
export const chessSocket = io('/chessSocket');
export const simonSocket = io('/Simon');
