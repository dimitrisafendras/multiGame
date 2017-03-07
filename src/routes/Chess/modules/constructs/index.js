
const figures = new Map([
  ['king', king],
]);

export default (key)=> (figures.get(key));
