import React from 'react';
import { Content, FlexContainer } from 'components/common/content';
import { useSheet } from 'components/common/jss';
import AuthorizationForm from './auth-form';
import AuthorizationProviders from './auth-providers';
import authStoreConnector from './auth-store-connector';

const AuthProviders = authStoreConnector(AuthorizationProviders);
const AuthForm = authStoreConnector(AuthorizationForm);

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
      <Content text
        className={classes.text}>
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
