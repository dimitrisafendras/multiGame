
const assignBoolboardToSquares = (squares, newBoolBoard)=> {
  let newSquares = new Array(8);
  for (let i = 0; i < 8; i++) {
    newSquares[i] = new Array(8);
    for (let j = 0; j < 8; j++) {
      newSquares[i][j] = Object.assign({}, squares[i][j], newBoolBoard[i][j])
    }
  }
  return newSquares;
};

export default assignBoolboardToSquares;
