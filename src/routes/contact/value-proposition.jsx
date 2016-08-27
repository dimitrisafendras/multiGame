import React from 'react';
import { Content, FlexContainer } from 'components/common/content';
import { useSheet } from 'components/common/jss';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component.
//
const content = {
  title: 'Contact Us',
  subTitle:
  `Whether you're looking for more info, have a question or
  a commercial query get in touch.`,
};

//
// Define the CSS styles of the component.
//
const style = {
  container: {
    backgroundColor: muiTheme.palette.pickerHeaderColor,
    color: muiTheme.palette.white,
    height: '300px',
  },
};

//
// Define the component.
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
        <Content largeSubTitle>
          {content.subTitle}
        </Content>
      </FlexContainer>
    </article>
  );
};

ValueProposition.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(ValueProposition, style);
