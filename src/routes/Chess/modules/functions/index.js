import { MAX_COLS, MAX_ROWS } from '../constants';

console.log(MAX_COLS);
console.log(MAX_ROWS);
const squares = new Array(8);

for(let i=0; i<8; i++){
  squares[i] = new Array(8);
  for (let j= 0; j<8; j++){
    squares[i][j] = '';
  }
}

export default squares;
