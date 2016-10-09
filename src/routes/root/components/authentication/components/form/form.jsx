import React from 'react';

import {
  FlexContainer,
  Content,
  useSheet,
} from 'components';

import {
  AuthProviders,
  AuthForm,
} from './containers';

//
// Define the content of the component.
//
const content = 'or with your agile actors account';

//
// Define the CSS styles of the component.
//
const style = {
  text: {
    textTransform: 'uppercase',
  },
};

//
// Define the component.
//
function Form({ sheet, mode }) {
  const { classes } = sheet;
  return (
    <FlexContainer column center>
      <AuthProviders mode={mode} />
      <Content text className={classes.text}>
        {content}
      </Content>
      <AuthForm mode={mode} />
    </FlexContainer>
  );
};

Form.propTypes = {
  sheet: React.PropTypes.object,
  mode: React.PropTypes.string,
};

export default useSheet(Form, style);
