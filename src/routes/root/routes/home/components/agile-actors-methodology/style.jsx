import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { jss } from 'components';

const styles = {
  backgroundLine: {
    backgroundImage: Images.BackgroundLineLarge,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    position: 'relative',
    height: '620px',
  },
  outerTitle: {
    color: muiTheme.palette.blue700,
    marginBottom: '6.1%',
    textAlign: 'center',
  },
  container: {
    marginLeft: '10px',
    marginRight: '10px',
    width: '306px',
    height: '350px',
    paddingTop: '25px',
    paddingBottom: '25px',
    paddingLeft: '25px',
    paddingRight: '25px',
    textAlign: 'left',
    boxSizing: 'border-box',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
      textAlign: 'right',
    },
  },
  imgWrapper: {
    position: 'relative',
    width: '200px',
    marginTop: '-25px',
    marginBottom: '0px',
    marginLeft: '-25px',
    marginRight: '-25px',
    zIndex: '3',
  },
  img: {
    height: '100%',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textWrapper: {
    position: 'relative',
    width: '90%',
  },
  title: {
    color: muiTheme.palette.blue700,
    fontWeight: '300',
  },
  itemImage_0: {
    top: '21px',
    left: '380px',
  },
  itemText_0: {
    top: '0px',
    left: '10px',
  },
  itemImage_1: {
    top: '455px',
    left: '-210px',
  },
  itemText_1: {
    top: '290px',
    left: '-12px',
  },
  itemImage_2: {
    top: '163px',
    left: '356px',
  },
  itemText_2: {
    top: '155px',
    left: '-25px',
  },
  itemImage_3: {
    top: '505px',
    left: '-120px',
  },
  itemText_3: {
    top: '203px',
    left: '10px',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1581px)': {
    backgroundLine: {
      backgroundImage: Images.BackgroundLineSmall,
      backgroundSize: 'auto 100%',
      height: '1300px',
      marginTop: '0px',
      marginBottom: '0px',
      marginLeft: '-9.4%',
      marginRight: '-9.4%',
      width: '98vw',
    },
    container: {
      width: '510px',
      height: 'auto',
      marginLeft: '10px !important',
      marginRight: '10px !important',
      textAlign: 'left !important',
    },
    textWrapper: {
      width: '50%',
    },
    itemImage_0: {
      top: '-45px',
      left: '320px',
    },
    itemText_0: {
      top: '115px',
      left: '-220px',
    },
    itemImage_1: {
      top: '220px',
      left: '45px',
    },
    itemText_1: {
      top: '215px',
      left: '92px',
    },
    itemImage_2: {
      top: '288px',
      left: '325px',
    },
    itemText_2: {
      top: '420px',
      left: '-215px',
    },
    itemImage_3: {
      top: '540px',
      left: '50px',
    },
    itemText_3: {
      top: '490px',
      left: '165px',
    },
  },
  '@media (max-width: 767px)': {
    outerContainer : {
      '& .slick-arrow': {
        display: 'none !important',
      },
      '& .slick-dots button:before': {
        color: muiTheme.palette.blue700 + ' !important',
      },
    },
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
      textAlign: 'center !important',
      width: '100% !important',
    },
    imgWrapper: {
      top: '0px !important',
      left: '0px !important',
      width: '306px',
      height: '150px',
      marginTop: '6.1%',
      marginBottom: '6.1%',
    },
    textWrapper: {
      width: '80% !important',
      top: '0px !important',
      left: '0px !important',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
