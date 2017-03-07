import {
  wKing, wQueen, wRook, wBishop,
  wKnight, wPawn, bKing, bQueen,
  bRook, bBishop, bKnight, bPawn
} from '../../components/chessPieces'

const figures = new Map([
  ['wKing', wKing],
  ['bKing', bKing],
  ['wQueen', wQueen],
  ['bQueen', bQueen],
  ['wRook', wRook],
  ['bRook', bRook],
  ['wBishop', wBishop],
  ['bBishop', bBishop],
  ['wKnight', wKnight],
  ['bKnight', bKnight],
  ['wPawn', wPawn],
  ['bPawn', bPawn],
]);

export default (key)=> (figures.get(key));
