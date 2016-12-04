import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  FlexContainer,
  Container,
} from 'components';

const {
  component,
  contentWrapper,
  container,
  backgroundImage,
  title,
  subtitle,
} = classes;

const ValueProposition = () => (
  <article className={component}>
    <Container container className={contentWrapper}>
      <FlexContainer column outerContainer className={container}>
        <Content backgroundImage className={backgroundImage} />
        <Content largeTitle className={title}>
          {content.title}
        </Content>
        <Content largeSubTitle className={subtitle}>
          {content.subTitle}
        </Content>
        <Content largeText className={classes.text} dangerouslySetInnerHTML={{__html: content.text}} />
      </FlexContainer>
    </Container>
  </article>
);

export default ValueProposition;
