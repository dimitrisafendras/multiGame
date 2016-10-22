
const compose = (...containers) => (component) => containers.reduce(
  (lastComponent, nextContainer) => nextContainer(lastComponent),
  component
);

export {
  compose,
};
