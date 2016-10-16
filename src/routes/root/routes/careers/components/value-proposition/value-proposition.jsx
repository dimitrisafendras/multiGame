import React from 'react';
import { useSheet } from 'components/jss';

import { Content, FlexContainer, Container, Button } from 'components/content';

import { content } from './content';
import { style } from './style';

import { linkAble } from 'routes/root/containers';

type Props = {
  link: (pathOrUrl: string) => void,
  sheet: Object,
};

const ValueProposition = ({
  link,
  sheet: {
    classes: {
      component,
      contentWrapper,
      container,
      backgroundImage,
      title,
      subtitle,
      text,
      button,
    },
  },
}: Props) => (
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
        <Button secondary className={button} onClick={() => link(content.buttonRoute)}>
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default linkAble(useSheet(ValueProposition, style));
