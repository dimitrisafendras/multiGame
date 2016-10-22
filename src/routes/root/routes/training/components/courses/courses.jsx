import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Resizable,
} from 'components';

import {
  NormalContent,
  MobileContent,
} from './components';

type Props = {
  size : Object
};

const Courses = ({
  link,
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
        container>

        { mobile ? <MobileContent /> : <NormalContent /> }

      </Container>

    </Container>
  </article>
);

export default Resizable(Courses);
