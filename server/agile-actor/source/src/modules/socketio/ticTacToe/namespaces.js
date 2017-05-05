export default (io)=> {
  const sessionIo = io.of('/ticTacToe');

  sessionIo.on('connection', (socket) => {
    const { id } = socket;
    console.log('  --> SocketIO on connection', id);

    socket.on('newGame', (action)=>{
      socket.emit('newGame', action);
      socket.broadcast.emit('newGame', action);
    });

    socket.on('markTile', (action)=>{
      socket.emit('markTile', action);
      socket.broadcast.emit('markTile', action);
    });

  });
};
