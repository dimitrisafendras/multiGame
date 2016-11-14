import React from 'react';
import _ from 'lodash';
import Box from 'components/box';
import { classes, styles, makeClassesFromProps } from './styles'

const defaultStyleKeys = Object.keys(styles);
const cleanProps = (props) => _.omit(props, defaultStyleKeys);

type Props = {
  className?: string,
  style?: Object,
  onClick?: () => void,
  children?: HTMLElement,
};

export const Container = ({ className, ...rest }: Props) => (
  <div
    {...cleanProps(rest)}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);

export const Content = Container;

export const FlexContainer = ({ className, ...rest }: Props) => (
  <Box
    {...cleanProps(rest)}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);
