import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import { style } from './style';
import { content } from './content';

//
// Define the component.
//
function Introduction({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer largeContainer center
        className={classes.container} column>
        <Content normalTitle
          className={classes.title}>
          {content.title}
        </Content>
        <Content subTitle
          className={classes.subTitle}>
          {content.text}
        </Content>
      </FlexContainer>
    </article>
  );
};

Introduction.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Introduction, style);
