import createSquare from './createSquare';

const boardInitializer = (max_rows=8, max_cols=8)=> {

  const squares = new Array(max_rows);

  for (let i = 0; i<max_rows; i++) {
    squares[i] = new Array(max_cols);
    for (let j = 0; j<max_cols; j++) {
      squares[i][j] = createSquare('empty');
    }
  }

  //pawns initializer
  for (let i = 0; i<max_cols; i++) {
    squares[1][i] = createSquare('whitePawn');
    squares[6][i] = createSquare('blackPawn');
  }
//FIX: initialize dynamicly
  squares[0][0] = createSquare('whiteRook');
  squares[0][1] = createSquare('whiteKnight');
  squares[0][2] = createSquare('whiteBishop');
  squares[0][3] = createSquare('whiteQueen');
  squares[0][4] = createSquare('whiteKing');
  squares[0][5] = createSquare('whiteBishop');
  squares[0][6] = createSquare('whiteKnight');
  squares[0][7] = createSquare('whiteRook');
  squares[7][0] = createSquare('blackRook');
  squares[7][1] = createSquare('blackKnight');
  squares[7][2] = createSquare('blackBishop');
  squares[7][3] = createSquare('blackQueen');
  squares[7][4] = createSquare('blackKing');
  squares[7][5] = createSquare('blackBishop');
  squares[7][6] = createSquare('blackKnight');
  squares[7][7] = createSquare('blackRook');

  return squares;
};

export default boardInitializer;
