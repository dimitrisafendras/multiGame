import React from 'react';
import {
  Content,
  FlexContainer,
} from 'components';
import classNames from 'classnames';
import { Form } from '../form';

import { content } from './content';
import { classes } from './style';

type Props = {
  mode: string,
  changeMode: () => void,
};

const LoginRegister = ({ mode, changeMode }: Props) => (
  <FlexContainer>
    <FlexContainer center
      className={classNames(classes.formContainer, mode)}>
      <Form mode={mode} />
    </FlexContainer>
    <FlexContainer
      container
      column
      className={classes.instructions}>
      <Content
        text
        className={classes.title}>
        {content[mode].title}
      </Content>
      <Content
        text
        className={classes.text}>
        {content[mode].text}
      </Content>
      <button
        className={classes.button}
        onTouchTap={function () {
          changeMode(content[mode].button);
        }}
        >
        {content[mode].button}
      </button>
    </FlexContainer>
  </FlexContainer>
);

export default LoginRegister;
