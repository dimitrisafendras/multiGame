import {FLIP_CARD, RESTART_GAME} from "../constants/index";

export const options = {
  flipCard: (id) => ({
    type: FLIP_CARD,
    id,
  }),

  restart: () => ({
    type: RESTART_GAME
  }),
};



