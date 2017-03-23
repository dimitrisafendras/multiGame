
const figureIs  = (selectedFigure, targetFigure)=> {
  if (!targetFigure) return 'ERROR';
  if (selectedFigure.color === targetFigure.color) {
    return 'ALLY'
  }
  else if(targetFigure.color === 'empty'){
    return 'EMPTY'
  }
  return 'FOE'
};

export default figureIs ;
