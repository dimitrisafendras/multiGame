
const compose = (...containers) => (component) => containers.reduce(
  (lastComponent, nextPropMaper) => nextPropMaper(lastComponent),
  component
);

export {
  compose,
};
