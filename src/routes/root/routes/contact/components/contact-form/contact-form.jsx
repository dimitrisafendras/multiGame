import React from 'react';
import axios from 'axios';
import escape from 'escape-html';
import { FlexContainer, Button } from 'components/content';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui';
import { Snackbar } from 'material-ui';
import { useSheet } from 'components/jss';
import {Card} from 'material-ui/Card';
import { style } from './style';
import { content } from './content';

class SubmitValidationForm extends React.Component {
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
    const { classes } = this.props.sheet;
    return (
      <FlexContainer largeContainer
        center column className={classes.component}>
        <Card className={classes.container}>
          <Formsy.Form className={classes.form} id={'form-aa'}
            onValid={enableButton}
            onInvalid={disableButton}
            onValidSubmit={_this.submitForm} >
            <FlexContainer column center>
              {content.fields.map((field) => (
                <FormsyText
                  name={field.name}
                  validations={field.pattern}
                  validationError={field.error}
                  required autoComplete={false}
                  floatingLabelText={field.label}
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

export default useSheet(SubmitValidationForm, style);
