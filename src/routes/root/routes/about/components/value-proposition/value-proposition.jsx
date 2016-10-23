import React from 'react';

import { linkAble } from 'routes/root/containers';

import content from './content';
import { classes } from './style';

import {
  Content,
  FlexContainer,
  Container,
  Button,
} from 'components';

const {
  component,
  contentWrapper,
  container,
  backgroundImage,
  title,
  subtitle,
  text,
  button,
} = classes;

type Props ={
  link: (to: string) => void,
};

const ValueProposition = ({ link }: Props) => {
  return (
    <article className={component}>
      <Container container className={contentWrapper}>
        <FlexContainer largeContainer column className={container}>
          <Content backgroundImage className={backgroundImage} />
          <Content largeTitle className={title}>
            {content.title}
          </Content>
          <Content largeSubTitle className={subtitle}>
            {content.subTitle}
          </Content>
          <Content largeText className={text}>
            {content.text}
          </Content>
          <Button secondary className={button} onTouchTap={() => link(content.buttonLink)}>
            {content.buttonLabel}
          </Button>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default linkAble(ValueProposition);
