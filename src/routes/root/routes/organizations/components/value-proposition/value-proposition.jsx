import React from 'react';
import { style } from './style';
import { content } from './content';
import {
  useSheet,
  Content,
  FlexContainer,
  Container,
} from 'components';

type Props = {
  sheet: Object,
};

const ValueProposition = ({ sheet }: Props) => {
  const { classes } = sheet;

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
        </FlexContainer>
      </Container>
    </article>
  );
};

export default useSheet(ValueProposition, style);
