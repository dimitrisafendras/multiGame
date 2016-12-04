import React from 'react';

import {
  FlexContainer,
  Content,
} from 'components';

import {
  AuthProviders,
  AuthForm,
} from './containers';

import { classes } from './style';

const content = 'or with your agile actors account';

type Props = {
  mode: string,
};

const Form = ({ mode }: Props) => (
  <FlexContainer column center>
    <AuthProviders mode={mode} />
    <Content text className={classes.text}>
      {content}
    </Content>
    <AuthForm mode={mode} />
  </FlexContainer>
);

export default Form;
