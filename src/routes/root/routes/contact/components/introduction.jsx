import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';

//
// Define the content of the component.
//
const content = {
  title:
  `please submit this form and we will
  contact you`,
  text:
  `or you can call us
  at (+30) 214 687 3500`,
};

//
// Define the CSS styles of the component.
//
const style = {
  subTitle: {
    maxWidth: '600px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

//
// Define the component.
//
function Proposal({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer normalContainer column>
        <Content normalTitle>
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
