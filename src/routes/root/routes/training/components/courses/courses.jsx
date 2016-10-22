import React from 'react';
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
        container
        className={classes.contentWrapper}>

        { mobile ? <MobileContent /> : <NormalContent /> }

        <div className={classes.fade}></div>
      </Container>
    </Container>
  </article>
);

export default Resizable(Courses);
