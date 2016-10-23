import React from 'react';
import { Content, FlexContainer } from 'components/content';
import { classes } from './style';
import { content } from './content';

const Introduction = () => (
  <article>
    <FlexContainer normalContainer column
      center className={classes.container} >
      <Content largeTitle
        className={classes.title}>
        {content.title}
      </Content>
      <Content normalSubTitle
        className={classes.subTitle}>
        {content.text}
        <a href={`tel:${content.phone}`}
          className={classes.phone}>
          {content.phoneDisplay}
        </a>
      </Content>
    </FlexContainer>
  </article>
);

export default Introduction;
