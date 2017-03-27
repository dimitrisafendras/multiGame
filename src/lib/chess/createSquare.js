const createSquare = (fig)=> {
  if (fig === 'empty') return {
    figure: 'empty',
    color: 'empty',
    canMoveTo: 'false',
  };
  return {
    color: fig.substring(0,5),
    figure: fig.substring(5),
    canMoveTo: 'false',
  }
};

export default createSquare;
