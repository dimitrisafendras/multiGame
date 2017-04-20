
export default (io) => {
  const sessionIo = io.of('/Simon');
  let players = [];
  let ready = 0;
  sessionIo.on('connection', (socket, next) => {
    const { id } = socket;
    console.log('  --> SocketIO on connection', id);
    players.push(id);
    socket.broadcast.emit('connected', players.length);

    //ON DISCONNECT
    socket.on('disconnect', ()=>{
      console.log('disconected');
      players.shift();
      if (ready>0) ready--;
      socket.broadcast.emit('onlinePlayers', players.length);
    });

    socket.on('clickedPad', (pad)=>{
      socket.broadcast.emit('clickedPad', (pad));
      socket.emit('clickedPad', (pad));
    });

    socket.on('nextLevel', ()=>{
      let move = Math.floor(Math.random() * 4);
      socket.emit('nextLevel', move);
      socket.broadcast.emit('nextLevel', move);
    });

    socket.on('ready', ()=>{
      ready++;
      if(ready>1){
        let move = Math.floor(Math.random() * 4);
        socket.emit('allReady', move);
        socket.broadcast.emit('allReady', move);
      }
    });
    if (next) next();
  });
};
