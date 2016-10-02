import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import { style } from './style';
import { content } from './content';

//
// Define the component.
//
function Proposal({ sheet }) {
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

Proposal.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Proposal, style);
