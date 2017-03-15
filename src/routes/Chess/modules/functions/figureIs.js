
const figureIs  = (selectedFigure, targetFigure)=> {
  if (!targetFigure) return 'ERROR';
  if (selectedFigure.charAt(0) === targetFigure.charAt(0)) {
    return 'ALLY'
  }
  else if(targetFigure === 'empty'){
    return 'EMPTY'
  }
  return 'FOE'
};

export default figureIs ;
