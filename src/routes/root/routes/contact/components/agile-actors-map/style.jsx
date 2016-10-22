//
// Define the CSS styles of the component.
//
export const style = {
  container: {
    height: '360px',
    width: '100%',
    padding: '0px',
    minHeight: '360px',

  },
  '@media (max-width: 768px)': {
    container: {
      height: '300px',
      minHeight: '300px',
    },
  },
  '@media (max-width: 320px)': {
    container: {
      height: '240px',
      minHeight: '240px',

    },
  },
};
