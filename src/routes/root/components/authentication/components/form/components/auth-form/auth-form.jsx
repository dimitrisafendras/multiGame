import React from 'react';
import { FlexContainer } from 'components/content';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { useSheet } from 'components/jss';

import style from './style';
import content from './content';

type SignInUpProps = {
  provider: string,
  email: string,
  password: string,
};

type Props = {
  sheet: Object,
  canSubmit?: boolean,
  mode: string,
  signIn: (options: SignInUpProps) => void,
  signUp: (options: SignInUpProps) => void,
};

class AuthForm extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};
  }

  enableSubmit = () => this.setState({ canSubmit: true });
  disableSubmit = () => this.setState({ canSubmit: false });

  formActiveFields(mode) {
    return (this.props.mode !== 'register') ? (
      content.fields.filter(({common}) => common)
    ) : (
      content.fields
    );
  }

  submitForm = (data) => {
    const { mode, signIn, signUp } = this.props;
    if (mode === 'register') {
      if (data.password !== data.passwordConfirm) {
        return;
      }
      data.passwordConfirm && delete data.passwordConfirm;
      signUp(data);
      return;
    }

    signIn({
      ...data,
      provider: 'local',
    });
  };

  render() {
    const { mode, sheet } = this.props;
    const { classes } = sheet;
    const fields = this.formActiveFields(mode);
    return (
      <div>
        <Form
          id={`aa-${this.props.mode}-form`}
          className={classes.form}
          onValid={this.enableSubmit}
          onInvalid={this.disableSubmit}
          onValidSubmit={this.submitForm}>
          <FlexContainer column>
            {fields.map((field) => (
              <FormsyText
                key={`aa-auth-form-${field.name}`}
                required
                type={field.type}
                name={field.name}
                validations={field.pattern}
                validationError={field.error}
                floatingLabelText={field.label}
                className={classes.label}
              />
            ))}

            <button
              className={classes.button}
              type={'submit'}
              disabled={!this.state.canSubmit}>
              {mode}
            </button>
          </FlexContainer>
        </Form>
      </div>
    );
  }
};

export default useSheet(AuthForm, style);
