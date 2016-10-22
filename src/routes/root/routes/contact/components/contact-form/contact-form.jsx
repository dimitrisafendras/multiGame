import React from 'react';
import escape from 'escape-html';
import {createContactMessage} from 'model-services/user/graphql/contacts';
import { FlexContainer, Button } from 'components/content';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { Snackbar } from 'material-ui';
import { Card } from 'material-ui/Card';
import { classes } from './style';
import { content } from './content';

type Props = {
  message?: string,
  open?: boolean,
  canSubmit?: boolean,
};

class SubmitValidationForm extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: content.successText,
    };
  }

  enableButton = () => this.setState({ ...this.state,
    canSubmit: true,
  });

  disableButton= () => this.setState({ ...this.state,
    canSubmit: false,
  });

  submitForm = (data) => {
    const _this = this;
    for (const key of Object.keys(data)) {
      data[key] = escape(data[key]);
    }

    createContactMessage(data)
    .then((response) => {
      if (response.createContactMessage.status === 'ok') {
        _this.showSuccessToast();
        _this.refs.aaContactForm.reset();
      } else {
        _this.showErrorToast();
      }
    })
  .catch((response) => {
    _this.showErrorToast();
  });
  };

  showSuccessToast = () => this.setState({ ...this.state,
      open: true,
      message: content.successText,
    });

  showErrorToast = () => this.setState({ ...this.state,
      open: true,
      message: content.errorText,
    });

  handleRequestClose = () => this.setState({ ...this.state,
      open: false,
    });

  render() {
    const { enableButton, disableButton, handleRequestClose } = this;
    const _this = this;
    return (
      <FlexContainer largeContainer
        center column className={classes.component}>
        <Card className={classes.container}>
          <Formsy.Form className={classes.form} ref={'aaContactForm'}
            onValid={enableButton}
            onInvalid={disableButton}
            onValidSubmit={_this.submitForm}
            autoComplete='off'>
            <FlexContainer column center>
              {content.fields.map((field) => (
                <FormsyText
                  name={field.name}
                  validations={field.pattern}
                  validationError={field.error}
                  required floatingLabelText={field.label}
                  key={`aa-careers-form-contact-${field.name}`}
                  className={classes.label}
                  multiLine={field.multiLine} rows={field.rows}
                />
            ))}
              <Button className={classes.button}
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
            className={classes.toast} />
        </Card>
      </FlexContainer>
    );
  }
};

export default SubmitValidationForm;
