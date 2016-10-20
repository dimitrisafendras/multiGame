import React from 'react';
import content from './content';
import { classes } from './style';

import {
  useSheet,
  Content,
  FlexContainer,
  Container,
  Button,
  Link 
} from 'components';

const ValueProposition = () => {

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer normalContainer
          className={classes.container}
          row>
          <Content backgroundImage
            className={classes.backgroundImage} />
          <Container
            container
            className={classes.textWrapper}>
            <Content normalTitle
              className={classes.title}>
              {content.title}
            </Content>
            <Content text
              className={classes.text}>
              {content.text}
            </Content>
          </Container>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default ValueProposition;
