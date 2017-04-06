export default (io) => {
  const sessionIo = io.of('/chessSocket');
  let white = '';
  let black = '';
  let users = []; //FIX make it set
  let players = new Map();

  const getKeyByValue = (players, socket, users) => {
    for(let i=0; i<players.size; i++){
      if(players.get(users[i]) === socket){
        return users[i];
      }
    }
  };

  const removeFromArray = (userToRemove)=> {
    const indexToRemove = users.indexOf(userToRemove);
    users.splice(indexToRemove, 1);
  };

  sessionIo.on('connection', (socket) => {
    let player = '';
    let opponent = '';
    console.log('  --> SocketIO on connection CHESS');

    socket.on('challengePlayer', (opponents)=> {
      player = players.get(opponents.player);
      opponent = players.get(opponents.opponent);
      removeFromArray(player);
      removeFromArray(opponent);
      console.log(users);
      socket.broadcast.emit('updatePlayers', users);
      opponent.emit('gotChallenged', opponents.player);
    });

    socket.on('moveTile', (action) => {
      player.emit('movedTile', action);
      opponent.emit('movedTile', action);
    });

    socket.on('readyToPlay', (users) => {
      player = players.get(users.player);
      opponent = players.get(users.opponent);
      player.emit('gotReady',{playerColor: 'white'});
      opponent.emit('gotReady',{playerColor: 'black'})
    });

    socket.on('getReady',(username)=> {
      if (username){
        players.set(username, socket);
        users.push(username);
        socket.emit('getOnline');
        socket.emit('updatePlayers', users);
        socket.broadcast.emit('updatePlayers', users);
      }
      else {
        socket.emit('loginError','No user found. Please sign in ...');
      }
    });

    socket.on('getDisconnected', (username)=> {
      players.delete(username);
      removeFromArray(username);
      socket.broadcast.emit('updatePlayers', users);
    });

    socket.on('disconnect', ()=> {
      const userToRemove = getKeyByValue(players, socket, users);
      removeFromArray(userToRemove);
      socket.broadcast.emit('updatePlayers', users);
    });

  });
};
