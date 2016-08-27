import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, FlexContainer } from 'components/common/content';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component
//
const content = {
  title: 'Become an Agile Actor',
  subTitle: 'Join hundreds of tech professionals, Challenge yourself, Grow',
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    backgroundImage: Images.HeroImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    color: muiTheme.palette.white,
    height: '490px',
  },
};

//
// Define the component
//
const ValueProposition = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer largeContainer
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
