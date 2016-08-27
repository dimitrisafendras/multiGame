import React from 'react';
import { useSheet } from 'components/common/jss';
import { Content, FlexContainer } from 'components/common/content';

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
  container: {
    height: '300px',
  },
  title: {
    marginBottom: '20px',
  },
  text: {
    maxWidth: '600px',
  },
};

//
// Define the component
//
const Proposal = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer normalContainer
        column
        className={classes.container}>

        <Content normalTitle
          className={classes.title}>
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
