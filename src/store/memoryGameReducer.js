import {
  FLIP_CARD,
  RESTART_GAME,
  initialState,
} from '../routes/MemoryGame/modules/constants';

export default function memoryGame(state = initialState, action) {

  switch (action.type){

    case FLIP_CARD:
      let newState = { round : state.round + 1 };

      if(state.round % 2 == 1) {
        let cardClicked = state.cards.find((card) => {
          return card.id === action.id;
        });

        Object.assign(newState, {
          guess1 : cardClicked.id,
          guess2 : null,
          cards: state.cards.map((card) => {
            return card.id === action.id ?
              Object.assign({}, card, { flipped : true }) :
              Object.assign({}, card, { flipped : false })
          })
        })
      }

      else {
        let cardClicked = state.cards.find((card) => {
          return card.id === action.id;
        });

        if(cardClicked.rel === state.guess1) {
          Object.assign(newState, {
            guess1 : state.guess1,
            guess2 : cardClicked.rel,
            cards: state.cards.map((card) => {
              return (card.id === action.id || card.id === state.guess1) ?
                Object.assign({}, card, { flipped : true, discovered : true }) :
                card
            })
          })
        }

        else {
          Object.assign(newState, {
            guess1 : state.guess1,
            guess2 : cardClicked.rel,
            cards: state.cards.map((card) => {
              return card.id === action.id ?
                Object.assign({}, card, { flipped : true }) :
                card
            })
          })
        }
      }

      return newState;

    case RESTART_GAME :
      return initialState;

    default:
      return state;
  }
}
