import {
  white,
  blue200,
  blue600,
  blue700,
  cyan50,
  cyan400,
  cyan500,
  grey100,
  grey200,
  grey300,
  grey400,
  grey500,
  grey600,
  redA200,
  fullBlack,
  darkBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {
  spacing,
  zIndex,
  getMuiTheme,
} from 'material-ui/styles';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default getMuiTheme({
  spacing,
  zIndex,
  fontFamily: 'Lato, Helvetica, Arial, sans-serif',
  palette: {
    primary1Color: blue600,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: cyan400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey600,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan400,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,

    // Customised theme Colors (MUI irrelevant)
    white: white,
    grey100: grey100,
    grey200: grey200,
    grey300: grey300,
    grey400: grey400,
    grey500: grey500,
    grey600: grey600,
    cyan50: cyan50,
    cyan400: cyan400,
    cyan500: cyan500,
    blue200: blue200,
    blue600: blue600,
    blue700: blue700,
    redA200: redA200,
  },
  appBar: {
    logoHeight: '48px',
    logoWidth: '250px',
    boxSizing: 'border-box',
    color: white,
    mobileHeight: 60,
    tabletHeight: 68,
    width: '100%',
    maxWidth: '1600px',
    titleFontWeight: 400,
    textColor: blue600,
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    get paddingTop() {
      return (parseInt(this.mobileHeight) - parseInt(this.logoHeight)) / 2 + 'px';
    },
  },
  tabs: {
    backgroundColor: white,
    selectedTextColor: blue700,
    textColor: blue600,
  },
  textField: {
    borderColor: grey200,
    floatingLabelColor: cyan400,
    focusColor: cyan400,
    hintColor: cyan400,
    textColor: grey600,
    errorColor: redA200,
  },
  snackbar: {
    backgroundColor: blue600,
    textColor: cyan400,
  },
  breakpoints: {
    mobile: '',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1200px',
  },
});
