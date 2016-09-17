import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component
//
const content = {
  title: 'About us',
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    backgroundColor: muiTheme.palette.pickerHeaderColor,
    color: muiTheme.palette.white,
    height: '300px',
  },
};

//
// Define the component
//
function ValueProposition({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer normalContainer
        column
        className={classes.container}>
        <Content largeTitle>
          {content.title}
        </Content>
      </FlexContainer>
    </article>
  );
};

ValueProposition.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(ValueProposition, style);
