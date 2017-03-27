import React from 'react'

const wKing = <span> &#9812; </span>;
const wQueen = <span> &#9813; </span>;
const wRook = <span> &#9814; </span>;
const wBishop = <span> &#9815; </span>;
const wKnight = <span> &#9816; </span>;
const wPawn = <span> &#9817; </span>;
const bKing = <span> &#9818; </span>;
const bQueen = <span> &#9819; </span>;
const bRook = <span> &#9820; </span>;
const bBishop = <span> &#9821; </span>;
const bKnight = <span> &#9822; </span>;
const bPawn = <span> &#9823; </span>;
const Empty = <span></span>;

const figures = new Map([
  ['whiteKing', wKing],
  ['blackKing', bKing],
  ['whiteQueen', wQueen],
  ['blackQueen', bQueen],
  ['whiteRook', wRook],
  ['blackRook', bRook],
  ['whiteBishop', wBishop],
  ['blackBishop', bBishop],
  ['whiteKnight', wKnight],
  ['blackKnight', bKnight],
  ['whitePawn', wPawn],
  ['blackPawn', bPawn],
  ['empty', Empty],
]);

export default (figure,color)=> (figures.get(color.concat(figure)));
