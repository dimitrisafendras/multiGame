import React from 'react';
import { connect } from 'react-redux';

import { signIn } from 'layouts/application-layout/modules/user/user-actions';

import {
  AuthProviders as AuthorizationProviders,
  AuthForm as AuthorizationForm,
} from '../components';

import {
  Content,
  FlexContainer,
  useSheet,
} from 'components/common';

const authConnect = connect(
  (state) => ({}),
  (dispatch) => ({
    authProvider: (options) => { // { provider, email, password}
      dispatch(signIn(options));
    },
  })
);

const AuthProviders = authConnect(AuthorizationProviders);
const AuthForm = authConnect(AuthorizationForm);

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
