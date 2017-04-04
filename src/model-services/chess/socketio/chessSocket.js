import { chessSocket } from '../../../model-services/server-apis';
import { dispatcher } from '../../../routes/TicTacToe/modules/functions';

export const onMovedTile = () => {
  chessSocket.on('movedTile', (action) => (
    dispatcher(action)
  ))
};

export const onGotReady = () => {
  chessSocket.on('gotReady', (payload) => {
    dispatcher({
      type: 'CHOOSE_COLOR',
      payload,
    });
  })
};

export const onUpdatePlayers = () => {
  chessSocket.on('updatePlayers', (payload) => {
    dispatcher({
      type: 'UPDATE_PLAYERS',
      payload,
    });
  })
};

export const onError = () => {
  chessSocket.on('loginError', (msg) => {
    alert(msg);
  })
};

export const onGetOnline = () => {
  chessSocket.on('getOnline', () => {
    dispatcher({
      type: 'GET_ONLINE_CHESS'
    })
  })
};


export const onGotChallenged = () => {
  chessSocket.on('gotChallenged', (user) => {
    dispatcher({
      type: 'GOT_CHALLENGED',
      payload:{
        opponent: user,
      }
    })
  })
};




