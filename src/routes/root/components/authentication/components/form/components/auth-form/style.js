import muiTheme from 'styles/customized-mui-theme';

//
// Define the CSS styles of the component.
//
const style = {
  form: {
    marginBottom: '30px',
  },
  label: {
    lineHeight: '1.5',
  },
  button: {
    textTransform: 'uppercase',
    color: muiTheme.palette.accent1Color,
    backgroundColor: muiTheme.palette.white,
    border: `1px solid ${muiTheme.palette.accent1Color}`,
    borderRadius: '3px',
    height: '40px',
    width: '260px',
    marginTop: '25px',
  },
};

export {
  style,
};

export default style;
