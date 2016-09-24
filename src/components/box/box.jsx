import React, { PropTypes } from 'react';
import classNames from 'classnames';

// import { jss } from 'components/jss';

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

const isflexAttrValidValue = { flexGrow: true, flexShrink: true, flexBasis: true };

const flexWarn = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Box params: ',
      'Do not use both shortcut `flex` property and single `flexGrow`,',
      ' `flexShrink` or `flexBasis`.',
      'Those will overwrite the previously set `flex` value.');
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

function Box(props : Props) {
  // filter out and use box related props from props
  const {
    flex, flexGrow, flexShrink, flexBasis,
    inline, fit, center, wrap, column, reverse,
    order, justifyContent, alignItems, alignSelf, alignContent,
    width, minWidth, maxWidth, height, minHeight, maxHeight,
    ...restAfterBoxProps,
  } = props;

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
    .filter(([key, value]) => value)
    .forEach(([key, value]) => {
      if (styles[key]) {
        Object.assign(boxStyles, styles[key]);
        return;
      }

      isflexAttrValidValue[key] && boxStyles.flex && flexWarn();
      boxStyles[key] = value;
    });

  // resolve flex-wrap style property
  (wrap === 'reverse') && (boxStyles.flexWrap += '-reverse');

  // resolve flex-direction style property
  reverse && (boxStyles.flexDirection += '-reverse');

  // const { classes } = jss.createStyleSheet(computedStyles).attach();

  // pass the non Box related props to the container, along with the
  // the processed style prop
  let { style, children, onClick } = restAfterBoxProps;

  style = { ...style, ...boxStyles };
  return (
    <div
      className={classNames(/* classes.boxStyles, */ props.className)}
      {...{ style, children, onClick }} />
  );
};

export default Box;
