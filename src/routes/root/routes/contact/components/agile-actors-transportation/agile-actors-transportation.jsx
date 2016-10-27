import React from 'react';

import {
  Container,
  Resizable,
} from 'components';

import {
  MobileTransportation,
  NormalTransportation,
} from './components'

import {
  classes,
} from './style';

const {
  component,
} = classes;

const AgileActorsTransportation = ({
  size: {
    mobile,
    tablet,
  },
}: Props) => (
    <article>
      <Container normalContainer className={component}>
        { mobile ? <MobileTransportation /> : <NormalTransportation /> }
      </Container>
    </article>
  );

export default Resizable(AgileActorsTransportation);
