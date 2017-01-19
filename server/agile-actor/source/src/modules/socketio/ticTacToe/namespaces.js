
export default (io) => {
  const sessionIo = io.of('/ticTacToe');

  sessionIo.on('connection', (socket) => {
    const { id } = socket;
    console.log('  --> SocketIO on connection', id);

    });
};
