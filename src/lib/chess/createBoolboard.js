//boolean board initializer

const createBoolBoard = ((max_rows=8, max_cols=8)=> {
  const squares = new Array(max_rows);

  for (let i = 0; i < max_rows; i++){
    squares[i] = new Array(max_cols);

    for (let j = 0; j < max_cols; j++){
      squares[i][j] = {canMoveTo: false};
    }
  }
  return squares;
});

export default createBoolBoard;
