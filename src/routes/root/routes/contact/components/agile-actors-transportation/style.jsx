import muiTheme from 'styles/customized-mui-theme';

//
// The styles of the components
//
export const style = {
  component: {
    marginBottom: '25px',
    paddingTop: '0px',
  },
  container: {
    width: '640px',
    marginLeft: '10px',
    marginRight: '10px',
    height: '380px',
    paddingTop: '35px',
    paddingBottom: '20px',
    paddingLeft: '35px',
    paddingRight: '35px',
    boxSizing: 'border-box',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  imgWrapper: {
    width: '260px',
    height: '81px',
    marginBottom: '25px',
    marginLeft: '-12px',
  },
  img: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: muiTheme.palette.blue700,
    textTransform: 'uppercase',
    fontSize: '24px !important',
    marginBottom: '33px !important',
    backgroundColor: 'transparent !important',
  },
  inkBar: {
    backgroundColor: muiTheme.palette.blue700,
    height: '4px',
    width: '70px',
    marginLeft: '10%',
  },
  subTitle: {
    color: muiTheme.palette.blue700,
    fontSize: '15px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '25px',
    paddingLeft: '60px',
    paddingRight: '30px',
  },
  text: {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1.5',
    maxWidth: '555px',
    marginTop: '10px',
    paddingLeft: '60px',
    paddingRight: '30px',
  },
  '@media (max-width: 767px)': {
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
      width: '300px',
      height: '420px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px !important',
    },
    subTitle: {
      textAlign: 'center',
      marginBottom: '10px',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
    text: {
      paddingLeft: '0px',
      paddingRight: '0px',
      maxWidth: '232px',
      marginBottom: '25px',
      textAlign: 'center',
    },
  },
  '@media (max-width: 320px)': {
    component: {
      paddingBottom: '8%',
    },
    imgWrapper: {
      marginLeft: '-30px',
    },
  },
};
