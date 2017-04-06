import {
  NEW_GAME, RESET_CHESS,
  SELECT_TILE, MOVE_TILE,
  TOGGLE_OFF, CHOOSE_MODE,
  SENT_MOVE, AM_READY,
  SEND_CHALLENGE, STARTING_MATCH, DECLINE_MATCH
} from './constants';

export const options = {

  newGame: {
    offline: ()=> ({
      type: NEW_GAME
    }),
  },

  resetChess: ()=> ({
    type: RESET_CHESS
  }),

  selectTile: (line, col)=> ({
    type: SELECT_TILE,
    payload: {line, col}
  }),

  toggleOff: ()=> ({
    type: TOGGLE_OFF,
  }),

  moveTile: (line, col, selectedTile)=> ({
    type: MOVE_TILE,
    payload: {line, col, selectedTile}
  }),

  chooseMode: (mode)=> ({
    type: CHOOSE_MODE,
    payload: { mode }
  }),

  gotChallenged: (user)=> ({
    type: 'GOT_CHALLENGED',
    payload:{
      opponent: user,
    }
  }),

  getOnline: ()=> ({
    type: 'GET_ONLINE_CHESS'
  }),

  chooseColor: (color)=> ({
      type: 'CHOOSE_COLOR',
      payload: color,
    }),

  updatePlayers: (users)=> ({
    type: 'UPDATE_PLAYERS',
    payload: users,
  }),

  moveTileDummy: ()=> ({
    type: SENT_MOVE
  }),

  sendChallengeDummy: ()=> ({
    type: SEND_CHALLENGE
  }),

  startingMatchDummy: ()=> ({
    type: STARTING_MATCH
  }),

  iAmReadyDummy: ()=> ({
    type:AM_READY
  }),

  declineMatch: ()=> ({
    type:DECLINE_MATCH
  }),
  //FIX WTF ONLY PAYLOAD
  players: (username, opponent)=> ({
    player: username,
    opponent
  }),
};

