import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  component: {
    marginBottom: '25px',
    paddingTop: '0px',
  },
  container: {
    width: '640px',
    marginLeft: '10px',
    marginRight: '10px',
    paddingTop: '20px',
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
  titleWrapper: {
    textAlign: 'center',
    borderBottom: `1px solid ${muiTheme.palette.borderColor}`,
    paddingBottom: '20px',
  },
  title: {
    color: muiTheme.palette.primary1Color,
    textTransform: 'uppercase',
    fontSize: '24px !important',
    fontWeight: 'lighter !important',
    backgroundColor: 'transparent !important',
    borderBottom: `4px solid ${muiTheme.palette.primary1Color}`,
    opacity: '0.7',
    '&.active': {
      opacity: '1',
      fontWeight: 'normal !important',
    },
    '& div': {
      height: '159px !important',
    },
  },
  inkBar: {
    backgroundColor: muiTheme.palette.primary1Color,
    height: '4px',
    width: '33.3333%',
  },
  divider: {
    width: '90%',
    minWidth: '605px',
    maxWidth: '1003.5px',
    margin: '0 auto',
    position: 'relative',
    top: '183px',
    borderBottom: '2px solid' + muiTheme.palette.grey300,
  },
  subTitle: {
    color: muiTheme.palette.primary1Color,
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
      opacity: '1',
      fontWeight: 'normal !important',
      marginBottom: '20px !important',
      height: 'auto !important',
      paddingBottom: '16px',
      paddingLeft: '5px',
      paddingRight: '5px',
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
    component: {
      '& .slick-dots': {
        bottom: '-10px',
      },
      '& .slick-dots button:before': {
        color: muiTheme.palette.blue700 + ' !important',
      },
    },
  },
  '@media (max-width: 496px)': {
    component: {
      paddingBottom: '8%',
    },
    imgWrapper: {
      marginLeft: '-20px',
    },
  },
  '@media (max-width: 320px)': {
    imgWrapper: {
      marginLeft: '-31px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
