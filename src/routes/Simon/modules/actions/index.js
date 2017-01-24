export const clickPad = (pad) => {
  return {
    type: 'CLICK_PAD',
    payload: {
      pad
    }
  }
};

export const startGame = () => {
  return{
    type: 'START_GAME',
  }
};

export const reset = () => {
  return{
    type: 'RESET',
  }
};
