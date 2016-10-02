import muiTheme from 'styles/customized-mui-theme';

//
// Define the CSS styles of the component.
//
export const style = {
  container: {
    backgroundColor: muiTheme.palette.blue600,
  },
  title: {
    color: muiTheme.palette.white,
  },
  subTitle: {
    maxWidth: '600px',
    fontSize: '20px',
    fontWeight: '300',
    marginTop: '15px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: muiTheme.palette.white,
  },
  phone: {
    textDecoration: 'none',
    color: muiTheme.palette.white,
    fontSize: '20px',
    fontWeight: '300',
    cursor: 'default',
  },
  '@media (max-width: 767px)': {
    title: {
      fontSize: '30px',
      marginBottom: '15px',
    },
    subTitle: {
      maxWidth: '450px',
      fontSize: '15px',
      marginTop: '0px',
    },
    phone: {
      fontSize: '15px',
    },
  },
};
