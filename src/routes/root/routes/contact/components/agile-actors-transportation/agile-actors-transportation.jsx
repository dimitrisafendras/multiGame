import React from 'react';

import {
  Container,
  Resizable,
} from 'components';

import {
  MobileTransportation,
  NormalTransportation,
} from './components';

import {
  classes,
} from './style';

const {
  component,
} = classes;

type Props = {
  size: Object,
  mobile?: boolean,
}

const AgileActorsTransportation = ({
  size: {
    mobile,
    tablet,
  },
}: Props) => (
  <article>
    <Container outerContainer className={component}>
      { mobile ? <MobileTransportation /> : <NormalTransportation /> }
    </Container>
  </article>
  );

export default Resizable(AgileActorsTransportation);
