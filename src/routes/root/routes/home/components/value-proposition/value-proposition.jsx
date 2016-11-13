import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  FlexContainer,
  Container,
  Button,
} from 'components';

import { linkAble } from 'routes/root/containers';

type Props = {
  link: (to: string) => void,
}
const ValueProposition = ({ link }: Props) => (
  <article className={classes.component}>
    <Container container className={classes.contentWrapper}>
      <FlexContainer column largeContainer className={classes.container}>
        <Content backgroundImage className={classes.backgroundImage} />
        <Content largeTitle
          className={classes.title}>
          {content.title}
        </Content>
        <Content largeSubTitle className={classes.subtitle}>
          {content.subTitle}
        </Content>
        <Content largeText className={classes.text} dangerouslySetInnerHTML={{__html: content.text}}/>
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

export default linkAble(ValueProposition);
