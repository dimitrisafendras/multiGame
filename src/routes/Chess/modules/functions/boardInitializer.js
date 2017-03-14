import { MAX_COLS, MAX_ROWS } from '../constants/index.js';

console.log(MAX_COLS, MAX_ROWS);
//FIX: optimize the way we initialize the board
//FIX: MAX_COLS, MAX_ROWS

const boardInitializer = () => {
  const squares = new Array(8);

  for (let i = 0; i < 8; i++) {
    squares[i] = new Array(8);
    for (let j = 0; j < 8; j++) {
      squares[i][j] = 'empty';
    }
  }

  //pawns initializer
  for (let i = 0; i < 8; i++) {
  }

  squares[0][0] = 'wRook';
  squares[0][1] = 'wKnight';
  squares[0][2] = 'wBishop';
  squares[0][3] = 'wQueen';
  squares[0][4] = 'wKing';
  squares[0][5] = 'wBishop';
  squares[0][6] = 'wKnight';
  squares[0][7] = 'wRook';
  squares[7][0] = 'bRook';
  squares[7][1] = 'bKnight';
  squares[7][2] = 'bBishop';
  squares[7][3] = 'bQueen';
  squares[7][4] = 'bKing';
  squares[7][5] = 'bBishop';
  squares[7][6] = 'bKnight';
  squares[7][7] = 'bRook';

  return squares;
};

const squares = boardInitializer();

export default squares;
