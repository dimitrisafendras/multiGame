const squares = new Array(8);

for(let i=0; i<8; i++){
  squares[i] = new Array(8)
  for (let j= 0; j<8; j++){
    squares[i][j] = '';
  };
}

squares[0][3] = 'wKing';

export default squares;
