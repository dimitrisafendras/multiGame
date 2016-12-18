import React from 'react';

import { compose } from 'store';
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
          <Content largeText className={classes.text} dangerouslySetInnerHTML={{__html: content.text}} />
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

export default compose(linkAble)(ValueProposition);
