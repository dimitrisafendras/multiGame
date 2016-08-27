import React from 'react';
import axios from 'axios';
import escape from 'escape-html';
import { FlexContainer, Button } from 'components/common/content';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { Snackbar } from 'material-ui';
import { useSheet } from 'components/common/jss';

//
// Define the CSS styles of the component.
//
const style = {
  form: {
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    width: '80% !important',
    minWidth: '300px',
    display: 'block !important',
    maxWidth: '800px',
  },
  button: {
    marginTop: '30px',
  },
  toast: {
    textAlign: 'center',
  },
  '@media (max-width: 1580px)': {
    label: {
      width: '90%',
    },
  },
};

//
// Define the content of the component.
//
const config = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      pattern: 'minLength:2,maxLength:100',
      error: 'Please enter a valid name',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'email',
      label: 'Email',
      pattern: 'isEmail',
      error: 'Please enter a valid email',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'subject',
      label: 'Subject',
      pattern: 'minLength:2,maxLength:100',
      error: 'Please write us something more',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'message',
      label: 'Message',
      pattern: 'minLength:3,maxLength:400',
      error: 'Please write us something more',
      multiLine: true,
      rows: 3,
    },
  ],
  button: 'send',
  successText: 'Your message was successful sent!',
  errorText: 'An error occured, please try again.',
};

export default class SubmitValidationForm extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
    open: React.PropTypes.bool,
    sheet: React.PropTypes.object,
    canSubmit: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: config.successText,
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

    axios
    .post('/EmailContact', { data })
    .then((response) => {
      _this.showSuccessToast();
      document.getElementById('form-aa').reset();
    })
  .catch((response) => {
    _this.showErrorToast();
  });
  };

  showSuccessToast = () => this.setState({ ...this.state,
      open: true,
      message: config.successText,
    });

  showErrorToast = () => this.setState({ ...this.state,
      open: true,
      message: config.errorText,
    });

  handleRequestClose = () => this.setState({ ...this.state,
      open: false,
    });

  render() {
    const { enableButton, disableButton, handleRequestClose } = this;
    const _this = this;
    const { classes } = this.props.sheet;
    return (
      <div>
        <Formsy.Form className={classes.form} id={'form-aa'}
          onValid={enableButton}
          onInvalid={disableButton}
          onValidSubmit={_this.submitForm} >
          <FlexContainer column>
          {config.fields.map((field) => (
            <FormsyText
              name={field.name}
              validations={field.pattern}
              validationError={field.error}
              required
              floatingLabelText={field.label}
              key={`aa-careers-form-contact-${field.name}`}
              className={classes.label}
              multiLine={field.multiLine} rows={field.rows}
            />
          ))}
            <Button className={classes.button}
              type={'submit'}
              disabled={!this.state.canSubmit}>
              {config.button}
            </Button>
          </FlexContainer>
        </Formsy.Form>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={handleRequestClose}
          className={classes.toast} />
      </div>
    );
  }
};

export default useSheet(SubmitValidationForm, style);
