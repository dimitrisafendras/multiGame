import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { jss, isIE11 } from 'components';

const styles = {
  backgroundLine: {
    backgroundImage: isIE11 ? "url('images/home/backgroundLineLarge.png')" : Images.BackgroundLineLarge,
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
    top: '5px',
    left: '350px',
  },
  itemText_0: {
    top: '-15px',
    left: '0px',
  },
  itemImage_1: {
    top: '455px',
    left: '-260px',
  },
  itemText_1: {
    top: '295px',
    left: '-20px',
  },
  itemImage_2: {
    top: '139px',
    left: '356px',
  },
  itemText_2: {
    top: '110px',
    left: '-25px',
  },
  itemImage_3: {
    top: '505px',
    left: '-120px',
  },
  itemText_3: {
    top: '210px',
    left: '30px',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1581px)': {
    backgroundLine: {
      backgroundImage: isIE11 ? "url('images/home/backgroundLineSmall.png')" : Images.BackgroundLineSmall,
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
      top: '10px',
      left: '290px',
    },
    itemText_0: {
      top: '115px',
      left: '-220px',
    },
    itemImage_1: {
      top: '290px',
      left: '5px',
    },
    itemText_1: {
      top: '215px',
      left: '95px',
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
      top: '565px',
      left: '5px',
    },
    itemText_3: {
      top: '450px',
      left: '160px',
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
      paddingLeft: '30px !important',
      paddingRight: '30px !important',
      marginLeft: '5px !important',
      marginRight: '5px !important',
      textAlign: 'center !important',
      width: '100% !important',
    },
    imgWrapper: {
      top: '0px !important',
      left: '0px !important',
      width: '306px',
      height: '150px',
      marginTop: '10px',
      marginBottom: '30px',
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
