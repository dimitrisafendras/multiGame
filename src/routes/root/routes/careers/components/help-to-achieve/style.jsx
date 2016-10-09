import muiTheme from 'styles/customized-mui-theme';

//
// The style of the component
//
export const style = {
  outerContainer: {
    backgroundColor: muiTheme.palette.white,
  },
  outerTitle: {
    color: muiTheme.palette.blue700,
    marginBottom: '6.1%',
    textAlign: 'center',
  },
  containerWrapper: {
    '&:first-child': {
      marginRight: '10px',
    },
    '&:last-child': {
      marginLeft: '10px',
    },
  },
  container: {
    backgroundColor: muiTheme.palette.grey200,
    marginLeft: '10px',
    marginRight: '10px',
    width: '306px',
    height: '460px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '35px',
    paddingRight: '35px',
    boxSizing: 'border-box',
    border: '2px solid #eee',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  imgWrapper: {
    backgroundColor: muiTheme.palette.white,
    width: '306px',
    height: '180px',
    marginTop: '-35px',
    marginBottom: '0px',
    marginLeft: '-35px',
    marginRight: '-35px',
  },
  img: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: muiTheme.palette.blue700,
    fontWeight: '300',
    marginTop: '35px',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1581px)': {
    containerWrapper: {
      '&:first-child': {
        marginRight: '5px',
        marginLeft: '5px',
        marginBottom: '20px',
      },
      '&:last-child': {
        marginRight: '5px',
        marginLeft: '5px',
      },
    },
  },
  '@media (max-width: 767px)': {
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};