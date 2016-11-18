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
        <FlexContainer outerContainer column className={container}>
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
          <FlexContainer className={button}>
            <Button secondary onTouchTap={() => link(content.buttonLink)}>
              {content.buttonLabel}
            </Button>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default linkAble(ValueProposition);
