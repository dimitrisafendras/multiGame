import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  FlexContainer,
  Container,
} from 'components';

const ValueProposition = () => {
  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer outerContainer
          className={classes.container}
          column
          center>
          <Content largeTitle
            className={classes.title}>
            {content.title}
          </Content>
          <Content largeText
            className={classes.text}>
            {content.text}
          </Content>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default ValueProposition;
