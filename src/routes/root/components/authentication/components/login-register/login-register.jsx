import React from 'react';
import {
  Content,
  FlexContainer,
  useSheet,
} from 'components';
import classNames from 'classnames';
import { Form } from '../form';

import { content } from './content';
import { style } from './style';

function LoginRegister({ sheet, mode, changeMode }) {
  const { classes } = sheet;

  return (
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
};

LoginRegister.propTypes = {
  sheet: React.PropTypes.object,
  mode: React.PropTypes.string,
  changeMode: React.PropTypes.func,
};

export default useSheet(LoginRegister, style);
