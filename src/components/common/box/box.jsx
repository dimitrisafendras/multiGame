import React from 'react';
import classNames from 'classnames';

// import { jss } from 'components/common/jss';

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

function Box(props) {
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

Box.propTypes = {
  className: React.PropTypes.string,
  fit: React.PropTypes.bool,
  center: React.PropTypes.bool,
  inline: React.PropTypes.bool,
  wrap: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
  column: React.PropTypes.bool,
  flex: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  flexGrow: React.PropTypes.number,
  flexShrink: React.PropTypes.number,
  flexBasis: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]),
  reverse: React.PropTypes.bool,
  order: React.PropTypes.bool,
  justifyContent: React.PropTypes.string,
  alignItems: React.PropTypes.string,
  alignSelf: React.PropTypes.string,
  alignContent: React.PropTypes.string,
  width: React.PropTypes.string,
  minWidth: React.PropTypes.string,
  maxWidth: React.PropTypes.string,
  height: React.PropTypes.string,
  minHeight: React.PropTypes.string,
  maxHeight: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Box;
