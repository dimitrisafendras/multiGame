import React from 'react';

import { Container, Button } from 'components/content';

import {
  classes,
  styles as style,
} from './style';

import content from './content';

const { providers } = content;

const {
  container,
  providerWrapper,
} = classes;

type Props = {
  signIn: (options: { provider: string }) => void,
  mode: string,
};

class AuthProviders extends React.Component {
  props: Props;

  render() {
    const { props: { signIn } } = this;
    return (
      <Container className={container}>
        {providers.map(({ provider, backgroundColor }) =>
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

export default AuthProviders;
