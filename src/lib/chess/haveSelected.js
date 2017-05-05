const haveSelected = (selectedTile)=> {
 if (((selectedTile.line || selectedTile.line === 0) && (selectedTile.col || selectedTile.col === 0)));
};

export default haveSelected;
