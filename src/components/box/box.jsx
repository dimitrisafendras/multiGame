import React, { Component, PropTypes } from 'react';

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  inline: {
    display: 'inline-flex',
  },
  fit: {
    width: '100%',
    height: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
};

const isflexAttrValidValue = {
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
};

const flexWarnOnConflict = (isFlexProp, isFlexShortcut) => {
  if (isFlexProp && isFlexShortcut && process.env.NODE_ENV !== 'production') {
    console.warn(
      `flex-Box properties:
       Do not use both shortcut 'flex' property
       and single 'flexGrow', flexShrink' and/or 'flexBasis',
       that overwrite the previously set 'flex' value.`
    );
  }
};

type Props = {
  className?: string,
  fit?: boolean,
  center?: boolean,
  inline?: boolean,
  wrap?: boolean | string,
  column?: boolean,
  flex?: number | string,
  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: number | string,
  reverse?: boolean,
  order?: boolean,
  justifyContent?: string,
  alignItems?: string,
  alignSelf?: string,
  alignContent?: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string,
  height?: string,
  minHeight?: string,
  maxHeight?: string,
  children: PropTypes.node,
};

function Box(props : Props): Component {
  const {
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    inline,
    fit,
    center,
    wrap,
    column,
    reverse,
    order,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    ...restAfterBoxProps,
  } = props; // filter out flex-box related props

  const boxProps = {
    flexContainer: true,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    inline,
    fit,
    center,
    wrap,
    column,
    reverse,
    order,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  };

  // Create the computed styling object that contains the Box styles
  const computedStyles = { boxStyles: {} };
  const boxStyles = computedStyles.boxStyles;

  Object.entries(boxProps)
  .filter(([key, value]) => (
    value && !(styles[key] && Object.assign(boxStyles, styles[key]))
  ))
  .forEach(([key, value]) => {
    flexWarnOnConflict(isflexAttrValidValue[key], boxStyles.flex);
    boxStyles[key] = value;
  });

  if (wrap === 'reverse') { // resolve flex-wrap style property
    boxStyles.flexWrap += '-reverse';
  }

  if (reverse) { // resolve flex-direction style property
    boxStyles.flexDirection += '-reverse';
  }

  // pass the non Box related props to the container,
  // along with the the processed style prop
  const style = { ...restAfterBoxProps.style, ...boxStyles };
  const { children, onClick, className } = restAfterBoxProps;

  return (
    <div {...{ className, style, onClick, children }} />
  );
};

export default Box;
