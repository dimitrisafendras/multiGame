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
  textWrapper,
  title,
  text,
} = classes;

const ValueProposition = () => (
  <article className={component}>
    <Container container className={contentWrapper}>
      <FlexContainer outerContainer row className={container}>
        <Content backgroundImage className={backgroundImage} />
        <Container container className={textWrapper}>
          <Content normalTitle className={title}>
            {content.title}
          </Content>
          <Content text className={text}>
            {content.text}
          </Content>
        </Container>
      </FlexContainer>
    </Container>
  </article>
);

export default ValueProposition;
