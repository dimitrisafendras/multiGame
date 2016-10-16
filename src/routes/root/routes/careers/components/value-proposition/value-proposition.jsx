import React from 'react';
import content from './content';
import { classes } from './style';
import { linkAble } from 'routes/root/containers';

import {
  Content,
  FlexContainer,
  Container,
  Button,
  Link
} from 'components/content';

const ValueProposition = ({ link }) => {

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer largeContainer
          className={classes.container}
          column>
          <Content backgroundImage
            className={classes.backgroundImage} />
          <Content largeTitle
            className={classes.title}>
            {content.title}
          </Content>
          <Content largeSubTitle
            className={classes.subtitle}>
            {content.subTitle}
          </Content>
          <Content largeText
            className={classes.text}>
            {content.text}
          </Content>
          <Button 
            secondary
            className={classes.button}
            onClick={() => link(content.buttonRoute)}>
            {content.buttonLabel}
          </Button>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default ValueProposition;
