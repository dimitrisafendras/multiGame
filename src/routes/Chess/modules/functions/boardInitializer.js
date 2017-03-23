import {MAX_COLS, MAX_ROWS} from "../constants/index.js";

console.log(MAX_COLS, MAX_ROWS);
//FIX: optimize the way we initialize the board
//FIX: MAX_COLS, MAX_ROWS
const createSquare = (fig)=> {
  if (fig === 'empty') return {
    figure: 'empty',
    color: 'empty',
    canMoveTo: 'false',
  };
  return {
    color: fig.substring(0,5),
    figure: fig.substring(5),
    canMoveTo: 'false',
  }
};

const BoardInitializer = () => {
  const squares = new Array(8);

  for (let i = 0; i < 8; i++) {
    squares[i] = new Array(8);
    for (let j = 0; j < 8; j++) {
      squares[i][j] = createSquare('empty');
    }
  }

  //pawns initializer
  for (let i = 0; i < 8; i++) {
    squares[1][i] = createSquare('whitePawn');
    squares[6][i] = createSquare('blackPawn');
  }

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

const squares = BoardInitializer();

export default squares;
