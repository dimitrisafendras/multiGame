import classNames from 'classnames';
import { jss } from 'components/jss';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the default styles of the components
//
const style = {
  largeContainer: {
    backgroundColor: muiTheme.palette.white,
    color: muiTheme.palette.grey600,
    position: 'relative',
    width: '100%',
    minWidth: '300px',
    height: 'auto',
    minHeight: '490px',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    boxSizing: 'border-box',
    zIndex: '1',
    overflow: 'hidden',
  },
  normalContainer: {
    backgroundColor: muiTheme.palette.white,
    color: muiTheme.palette.grey600,
    position: 'relative',
    width: '100%',
    minWidth: '300px',
    height: 'auto',
    minHeight: '300px',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    boxSizing: 'border-box',
    zIndex: '1',
    overflow: 'hidden',
  },
  fullWidthContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    zIndex: '1',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    zIndex: '1',
    overflow: 'hidden',
  },
  largeTitle: {
    fontSize: '46px',
    fontWeight: 300,
    lineHeight: '51px',
    marginBottom: '20px',
    zIndex: '3',
  },
  largeSubTitle: {
    fontSize: '30px',
    fontWeight: 300,
    lineHeight: '33px',
    zIndex: '3',
  },
  largeText: {
    fontSize: '17px',
    lineHeight: '27px',
    zIndex: '3',
  },
  normalTitle: {
    fontSize: '30px',
    lineHeight: '33px',
    marginBottom: '15px',
    zIndex: '3',
  },
  normalSubTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    lineHeight: '26px',
    zIndex: '3',
  },
  title: {
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '10px',
    zIndex: '3',
  },
  subTitle: {
    fontSize: '16px',
    lineHeight: '25px',
    zIndex: '3',
  },
  text: {
    fontSize: '15px',
    lineHeight: '19px',
    zIndex: '3',
  },
  backgroundImage: {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '2',
  },
  image: {},
  link: {},
  button: {
    zIndex: 3,
    boxShadow: 'none',
    display: 'inline-table',
  },
  '@media (max-width: 768px)': {
    largeTitle: {
      fontSize: '43px',
    },
    largeSubTitle: {
      fontSize: '28px',
    },
    normalTitle: {
      fontSize: '28px',
    },
    normalSubTitle: {
      fontSize: '21px',
    },
  },
  '@media (max-width: 414px)': {
    largeTitle: {
      fontSize: '40px',
    },
    largeSubTitle: {
      fontSize: '26px',
    },
    normalTitle: {
      fontSize: '26px',
    },
    normalSubTitle: {
      fontSize: '20px',
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export { classes };

// Combine default and instance specific classes of a component
export const makeClassesFromProps = (props, classes) => classNames(
  ...Object.entries(classes).map(
    ([contentType, typeClass]) => ({ [typeClass]: !!props[contentType] })
  ),
  props.className
);
