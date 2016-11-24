import React from 'react';
import escape from 'escape-html';
import {createContactMessage} from 'model-services/user/graphql/contacts';
import { Container, FlexContainer, Button } from 'components/content';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { Snackbar } from 'material-ui';
import { classes, styles } from './style';
import { content } from './content';

const {
  container,
  form,
  label,
  button,
  toast,
} = classes;

type Props = {
  message?: string,
  open?: boolean,
  canSubmit?: boolean,
};

class SubmitValidationForm extends React.Component {
  props: Props;

  state = {
    open: false,
    message: content.successText,
  };

  enableButton = () => this.setState({ ...this.state,
    canSubmit: true,
  });

  disableButton = () => this.setState({ ...this.state,
    canSubmit: false,
  });

  submitForm = (data) => {
    for (const key of Object.keys(data)) {
      data[key] = escape(data[key]).replace(/\n/g, '');
    }

    createContactMessage(data)
    .then((response) => {
      if (response.createContactMessage.status === 'ok') {
        this.showSuccessToast();
        this.refs.aaContactForm.reset();
      } else {
        this.showErrorToast();
      }
    })
  .catch((response) => {
    this.showErrorToast();
  });
  };

  showSuccessToast = () => this.setState({
    ...this.state,
    open: true,
    message: content.successText,
  });

  showErrorToast = () => this.setState({
    ...this.state,
    open: true,
    message: content.errorText,
  });

  handleRequestClose = () => this.setState({
    ...this.state,
    open: false,
  });

  render() {
    const { enableButton, disableButton, handleRequestClose } = this;
    return (
      <Container container className={container}>
        <Formsy.Form className={form} ref={'aaContactForm'}
          onValid={enableButton}
          onInvalid={disableButton}
          onValidSubmit={this.submitForm}
          autoComplete='off'>
          <FlexContainer column center>
            {content.fields.map((field) => (
              <FormsyText
                name={field.name}
                validations={field.pattern}
                validationError={field.error}
                required floatingLabelText={field.label}
                key={`aa-careers-form-contact-${field.name}`}
                className={label}
                multiLine={field.multiLine} rows={field.rows} rowsMax={field.rowsMax}
                inputStyle={styles.textField}
                textareaStyle={styles.textField} />
          ))}
            <Button className={button}
              type={'submit'} secondary
              disabled={!this.state.canSubmit}>
              {content.button}
            </Button>
          </FlexContainer>
        </Formsy.Form>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={handleRequestClose}
          className={toast} />
      </Container>
    );
  }
};

export default SubmitValidationForm;
