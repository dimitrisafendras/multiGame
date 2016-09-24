import React from 'react';
import { useSheet } from 'components/jss';
import muiTheme from 'styles/customized-mui-theme';
import { Container, Button } from 'components/content';

//
// Define the content of the component
//
const content = {
  providers: [
    {
      provider: 'facebook',
      backgroundColor: '#365899',
    },
    {
      provider: 'linkedin',
      backgroundColor: '#0073B2',
    },
    {
      provider: 'google',
      backgroundColor: '#DB4437',
    },
    {
      provider: 'github',
      backgroundColor: '#7A3497',
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
type Props = {
  signIn: (options: { provider: string }) => void,
  sheet: Object,
  mode: string,
};

class AuthProviders extends React.Component {
  props: Props;

  render() {
    const { signIn, sheet } = this.props;
    const { container, providerWrapper } = sheet.classes;
    return (
      <Container className={container}>
        {content.providers.map(({ provider, backgroundColor }) =>
          <Button
            key={`aa-auth-provider-${provider}`}
            className={providerWrapper}
            backgroundColor={backgroundColor}
            labelStyle={style.button}
            label={provider}
            onTouchTap={function () { signIn({ provider }); }} />
        )}
      </Container>
    );
  };
};

export default useSheet(AuthProviders, style);
