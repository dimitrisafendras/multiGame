import {FLIP_CARD, RESTART_GAME} from "../constants/memoryGame";


export const flipCard = (id) => ({
    type: FLIP_CARD,
    id,
  })

 export const restart = () => ({
    type: RESTART_GAME
  })



