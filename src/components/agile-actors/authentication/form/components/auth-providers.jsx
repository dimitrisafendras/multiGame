import React from 'react';
import { useSheet } from 'components/common/jss';
import muiTheme from 'styles/customized-mui-theme';
import { RaisedButton } from 'material-ui';
import { Container } from 'components/common/content';

//
// Define the content of the component
//
const content = {
  providers: [
    {
      provider: 'facebook',
      backgroundColor: '#4a90e2',
    },
    {
      provider: 'linkedin',
      backgroundColor: '#1b3b60',
    },
    {
      provider: 'google',
      backgroundColor: '#d0021b',
    },
    {
      provider: 'github',
      backgroundColor: '#d0021b',
    },
  ],
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    width: '260px',
    paddingBottom: '36px', // TODO -12px
    paddingTop: '25px',
  },
  providerWrapper: {
    width: '260px',
    height: '40px',
    borderRadius: '3px',
    marginBottom: '10px',
  },
  button: {
    zIndex: 3,
    boxShadow: 'none',
    display: 'inline-table',
    color: muiTheme.palette.white,
    fontSize: '13px',
    //opacity: '0.5',
    //transition: '1s ease',
    //':hover': {
    //  opacity: 1,
    //},
  },

};

//
// Define the component
//
export const Button = (props) => {
  const { children, Reststyle, ...rest } = props;
  return (
    <RaisedButton
      style={{ ...style.button, ...Reststyle }}
      label={children}
      labelStyle={style.button}
      {...rest} />
  );
};

Button.propTypes = {
  children: React.PropTypes.node,
  Reststyle: React.PropTypes.object,
};

class AuthProviders extends React.Component {
  static propTypes = {
    authProvider: React.PropTypes.func,
    sheet: React.PropTypes.object,
    mode: React.PropTypes.string,
  };

  render() {
    const { authProvider, sheet } = this.props;
    const { container, providerWrapper } = sheet.classes;
    return (
      <Container className={container}>
        {content.providers.map(({ provider, backgroundColor }) =>
          <Button key={`aa-auth-provider-${provider}`}
            className={providerWrapper}
            backgroundColor={backgroundColor}
            onTouchTap={function () { authProvider({ provider }); }}>
            {provider}
          </Button>
        )}
      </Container >
    );
  };
};

export default useSheet(AuthProviders, style);
