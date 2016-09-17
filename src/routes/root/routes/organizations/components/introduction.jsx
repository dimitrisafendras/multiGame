import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';

//
// Define the content of the component
//
const content = {
  text:
  `Hundreds of businesses and organizations trust Agile Actors
  to form teams for successful projects and keep their workforce sharp.`,
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    paddingTop: '70px',
    paddingBottom: '70px',
    paddingLeft: '0px',
    paddingRight: '0px',
    textAlign: 'center',
    height: '50px',
  },
  text: {
    maxWidth: '657px',
  },
  divider: {
    width: '20%',
    maxWidth: '657px',
    minWidth: '100px',
    borderBottom: '1px solid #EEEEEE',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

//
// Define the component
//
const Introduction = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer
        fullWidthContainer
        column
        className={classes.container}>

        <Content
          largeSubTitle
          className={classes.text}>
          {content.text}
        </Content>

      </FlexContainer>

      <div className={classes.divider} />
    </article>
  );
};

Introduction.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Introduction, style);
