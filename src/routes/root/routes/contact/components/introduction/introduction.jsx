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
};

Introduction.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Introduction, style);
