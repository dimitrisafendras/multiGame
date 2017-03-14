
const isAlly = (selLineID, selSquareID, targetLine, targetSquare, squares)=> (
  squares[selLineID][selSquareID].charAt(0) != squares[targetLine][targetSquare].charAt(0)
);


export default isAlly;
