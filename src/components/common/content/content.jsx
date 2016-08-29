import React from 'react';
import _ from 'lodash';
import { jss } from 'components/common/jss';
import Box from 'components/common/box';
import classNames from 'classnames';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the default styles of the components
//
const defaultStyle = {
  largeContainer: {
    backgroundColor: muiTheme.palette.white,
    color: muiTheme.palette.grey600,
    position: 'relative',
    width: '100%',
    minWidth: '300px',
    height: 'auto',
    minHeight: '490px',
    paddingTop: '9.4%',
    paddingBottom: '9.4%',
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
    fontWeight: 700,
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

const { classes } = jss.createStyleSheet(defaultStyle).attach();

// Combine default and instance specific classes of a component
const makeClassesFromProps = (props, classes) => classNames(
  ...Object.entries(classes).map(
    ([contentType, typeClass]) => ({ [typeClass]: !!props[contentType] })
  ),
  props.className
);

const defaultStyleKeys = Object.keys(defaultStyle);
const cleanProps = (props) => _.omit(props, defaultStyleKeys);

// Define the components
export const Container = ({ className, ...rest }) => (
  <div
    {...cleanProps(rest)}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);

Container.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
};

Container.displayName = 'Container';

export const FlexContainer = ({ className, ...rest }) => (
  <Box
    {...cleanProps(rest)}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);

FlexContainer.propTypes = {
  className: React.PropTypes.string,
};

FlexContainer.displayName = 'FlexContainer';

export const Content = ({ className, ...rest }) => (
  <div
    className={makeClassesFromProps({ className, ...rest }, classes)}
    {...cleanProps(rest)} />
);

Content.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.any,
};

Content.displayName = 'Content';
