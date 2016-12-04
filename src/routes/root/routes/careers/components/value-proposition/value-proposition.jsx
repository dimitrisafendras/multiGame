import React from 'react';
import content from './content';

import {
  classes,
} from './style';

import { linkAble } from 'routes/root/containers';

import {
  Content,
  FlexContainer,
  Container,
  Button,
} from 'components/content';

const {
  component,
  contentWrapper,
  container,
  backgroundImage,
  title,
  subtitle,
} = classes;

type Props = {
  link: (pathOrUrl: string) => void,
};

const ValueProposition = ({ link }: Props) => (
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
        <FlexContainer className={classes.button}>
          <Button secondary onClick={() => link(content.buttonRoute)}>
            {content.buttonLabel}
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Container>
  </article>
);

export default linkAble(ValueProposition);
