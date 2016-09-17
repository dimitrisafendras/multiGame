import React from 'react';
import { FlexContainer } from 'components/content';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { useSheet } from 'components/jss';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the CSS styles of the component.
//
const style = {
  form: {
    marginBottom: '30px',
  },
  label: {
    lineHeight: '1.5',
  },
  button: {
    textTransform: 'uppercase',
    color: muiTheme.palette.accent1Color,
    backgroundColor: muiTheme.palette.white,
    border: `1px solid ${muiTheme.palette.accent1Color}`,
    borderRadius: '3px',
    height: '40px',
    width: '260px',
    marginTop: '25px',
  },
};

//
// Define the content of the component.
//
const content = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      pattern: 'isEmail',
      error: 'Please enter a valid email',
      common: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      pattern: 'minLength:6',
      error: 'Your password must be at least 6 characters',
      common: true,
    },
    {
      name: 'passwordConfirm',
      label: 'Confirm Password',
      type: 'password',
      pattern: 'equalsField:password',
      error: 'These passwords don\'t match',
      common: false,
    },
  ],
};

class AuthForm extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
    canSubmit: React.PropTypes.bool,
    mode: React.PropTypes.string,
    authProvider: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitForm = (data) => {
    data.passwordConfirm && delete data.passwordConfirm;
    this.props.authProvider({
      ...data,
      provider: 'local',
    });
  };

  render() {
    const _this = this;
    const { classes } = this.props.sheet;
    let isNewMember = (_this.props.mode === 'register');
    const fields = (!isNewMember) ? (content.fields.filter((item) => (item.common))) : (content.fields);
    return (
      <div>
        <Formsy.Form className={classes.form} id={`aa-${_this.props.mode}-form`}
          onValid={function () { _this.setState({ canSubmit: true }); }}
          onInvalid={function () { _this.setState({ canSubmit: false }); }}
          onValidSubmit={_this.submitForm}>
          <FlexContainer column>
            {fields.map((field) => (

              <FormsyText type={field.type}
                name={field.name}
                validations={field.pattern}
                validationError={field.error}
                required
                floatingLabelText={field.label}
                key={`aa-auth-form-${field.name}`}
                className={classes.label}
              />
          ))}
            <button className={classes.button}
              type={'submit'}
              disabled={!this.state.canSubmit}>
              {_this.props.mode}
            </button>
          </FlexContainer>
        </Formsy.Form>
      </div>
    );
  }
};

export default useSheet(AuthForm, style);
