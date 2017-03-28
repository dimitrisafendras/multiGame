export default (io)=> {
  const sessionIo = io.of('/chessSocket');
  let white = '';
  let black = '';

  sessionIo.on('connection', (socket) => {

    const { id } = socket;
    console.log('  --> SocketIO on connection CHESS', id);

    socket.on('moveTile', (action)=>{
      console.log('aaaaaaaaaaaaa');
      socket.broadcast.emit('movedTile', action);
      socket.emit('movedTile', action);
    });

    socket.on('getReady',(user)=>{
      if (!white) {
        console.log('aaa');
        white = user;
      }
      if (white && !black){
        console.log('aa11111a');
        black = user;
        socket.emit('gotReady',{playerColor: 'white'})
        socket.broadcast.emit('gotReady',{playerColor: 'black'})
      }
    })
  });
};
