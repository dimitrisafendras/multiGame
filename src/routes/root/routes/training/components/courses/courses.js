import React from 'react';
import { classes } from './style';

import {
  Content,
  Container,
  Resizable,
} from 'components';

import {
  NormalContent,
  MobileContent,
} from './components';

type Props = {
  size: {
    mobile?: boolean,
    tablet?: boolean,
  }
};

const Courses = ({
  size: {
    mobile,
    tablet,
  },
}: Props) => (
  <article>
    <Container
      fullWidthContainer
      className={classes.outerContainer}>
      <Content backgroundImage
        className={classes.backgroundImage} />

      <Container
        container
        className={classes.contentWrapper}>

        { mobile ? <MobileContent /> : <NormalContent /> }

      </Container>
    </Container>
  </article>
);

export default Resizable(Courses);
