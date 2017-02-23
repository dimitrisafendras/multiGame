import { FLIP_CARD, RESTART_GAME} from '../constants'

export const options = {

  flipCard:{
    offline: (id)=> ({
      type: FLIP_CARD,
      id
    })
  },

  restart:{
    offline: ()=> ({
      type: RESTART_GAME
    })
  }

};
