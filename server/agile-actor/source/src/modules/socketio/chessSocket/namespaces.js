export default (io)=> {
  const sessionIo = io.of('/chessSocket');

  sessionIo.on('connection', (socket) => {
    const { id } = socket;
    console.log('  --> SocketIO on connection CHESS', id);

    socket.on('newGame', (action)=>{
      socket.broadcast.emit('newGame', action);
    });

    socket.on('moveTile', (action)=>{
      console.log('aaaaaSSSSSSSSSSSSSSSS');
      socket.broadcast.emit('movedTile', action);
      socket.emit('movedTile', action);
    });

  });
};
