import * as img from '../../components/chessPieces'

export const figures = new Map([
  ['whiteKing', img.wKing],
  ['blackKing', img.bKing],
  ['whiteQueen', img.wQueen],
  ['blackQueen', img.bQueen],
  ['whiteRook', img.wRook],
  ['blackRook', img.bRook],
  ['whiteBishop', img.wBishop],
  ['blackBishop', img.bBishop],
  ['whiteKnight', img.wKnight],
  ['blackKnight', img.bKnight],
  ['whitePawn', img.wPawn],
  ['blackPawn', img.bPawn],
  ['empty',img.Empty],

]);

export default (figure,color)=> (figures.get(color.concat(figure)));
