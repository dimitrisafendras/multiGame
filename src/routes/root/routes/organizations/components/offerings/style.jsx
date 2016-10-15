import muiTheme from 'styles/customized-mui-theme';

//
// The styles of the components
//
export const style = {
  outerTitle: {
    color: muiTheme.palette.blue700,
    marginBottom: '3%',
    textAlign: 'center',
  },
  containerWrapper: {
    '&:first-child': {
      marginRight: '57px',
    },
    '&:last-child': {
      marginLeft: '57px',
    },
  },
  container: {
    marginLeft: '57px',
    marginRight: '57px',
    width: '236px',
    height: '385px',
    paddingTop: '35px',
    paddingBottom: '35px',
    boxSizing: 'border-box',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  title: {
    color: muiTheme.palette.blue700,
    fontWeight: '300',
    // fontSize: '1.2em',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1583px)': {
    containerWrapper: {
      '&:first-child': {
        marginRight: '52px',
        marginLeft: '52px',
        marginBottom: '20px',
      },
      '&:last-child': {
        marginRight: '52px',
        marginLeft: '52px',
      },
    },
  },
  '@media (max-width: 767px)': {
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
      textAlign: 'center',
      height: 'auto',
      paddingBottom: '20px',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};
