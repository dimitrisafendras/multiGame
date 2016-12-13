
const compose = (...containers) => (component) => containers.reduce(
  (lastComponent, nextContainer) => nextContainer(lastComponent),
  component
);

const stateProp = 0;
const actionProp = 0;

export {
  compose,
  stateProp,
  actionProp,
};
