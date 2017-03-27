import { moveOptions, haveSelected } from '../functions';

const selectATile = (state, { lineId, squareId })=> {
  if (!haveSelected(state.selectedTile)) {
    if (!(state.squares[lineId][squareId].figure === 'empty')) {
      let piece = 'move' + state.squares[lineId][squareId].figure;
      console.log(piece);
      let newBoolBoard = moveOptions[piece](lineId, squareId, state.squares, state.round);

      let newBoolBoardFromOld = (squares, newBoolBoard) => {
        let newSquares = new Array(8);
        for (let i = 0; i < 8; i++) {
          newSquares[i] = new Array(8);
          for (let j = 0; j < 8; j++) {
            newSquares[i][j] = Object.assign({}, squares[i][j], newBoolBoard[i][j])
          }
        }
        return newSquares;
      };

      let newSquares = newBoolBoardFromOld(state.squares, newBoolBoard);


      return {
        ...state,
        selectedTile: {
          line: lineId,
          square: squareId,
        },
        squares: newSquares,
        clickOptions:'moveTile',
      }
    }
  }
  return state;
};

export default selectATile;
