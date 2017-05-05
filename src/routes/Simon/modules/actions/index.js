//const a = then
//request[a]
//game[policy].letterChoosen(letter);

const options = {

  offline: {

    clickPad: (pad) => {
      return {
        type: 'CLICK_PAD',
        payload: {
          pad
        }
      }
    },

    startGame: () => {
      return {
        type: 'START_GAME',
      }
    },
  },

  online: {

    clickPadOnline: (pad) => {
      return {
        type: 'CLICK_PAD_ONLINE',
        payload: {
          pad
        }
      }
    },

    startGameOnline: () => {
      return {
        type: 'START_GAME_ONLINE',
      }
    },
  },

  reset: () => {
    return {
      type: 'RESET',
    }
  },

  waitPlayers: () => {
    return {
      type: 'WAIT_PLAYERS'
    }
  }
};

export default options;
