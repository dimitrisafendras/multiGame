import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';

//
// Define the content of the component
//
const content = {
  title: 'What Is An Agile Actor',
  text: 'Agile Actors is the ecosystem for the ambitious and talented tech professional. ' +
  'From setting meaningful personal goals to getting personal coaching, it helps you find ' +
  'your next career dot and deliver',
};

//
// Define the CSS styles of the components
//
const style = {
  text: {
    maxWidth: '600px',
  },
};

//
// Define the component
//
function Proposal({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer normalContainer
        column>
        <Content normalTitle>
          {content.title}
        </Content>
        <Content normalSubTitle
          className={classes.text}>
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
