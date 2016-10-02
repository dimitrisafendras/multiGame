//
// Define the CSS styles of the component.
//
export const style = {
  outerContainer: {
    height: '360px',
    width: '100%',
    padding: '0px',
  },
  container: {
    width: '100%',
    height: '80%',
    marginBottom: '30px',
    maxWidth: '800px',
    opacity: 0.5,
    ':hover': {
      opacity: 1,
    },
  },
  text: {
    height: '20%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@media (max-width: 1580px)': {
    container: {
      width: '90%',
      marginBottom: '50px',
    },
  },
};
