
export default (io) => {
  const sessionIo = io.of('/ticTacToe');

  sessionIo.on('connection', (socket) => {
    const { id } = socket;
    console.log('  --> SocketIO on connection', id);

    socket.on('newGame', (action)=>{
      console.log('NEWGAME ACTION');
      socket.emit('newGame', action);
      socket.broadcast.emit('newGame', action);
    })
  });
};
