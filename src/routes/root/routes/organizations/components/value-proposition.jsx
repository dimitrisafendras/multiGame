import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component
//
const content = {
  title: 'Your Business Partner for Software Development',
  subTitle:
  `From hiring the right tech professionals to untapping your team’s talent,
  we’re here to help you achieve your goals and grow your business`,
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    backgroundImage: 'url(/images/organizations/hero-image.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    color: muiTheme.palette.white,
    height: '490px',
  },
  subTitle: {
    maxWidth: '750px',
  },
};

const ValueProposition = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer
        largeContainer
        column
        className={classes.container}>

        <Content largeTitle>
          {content.title}
        </Content>

        <Content largeSubTitle
          className={classes.subTitle}>
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
