import React from 'react';
import { useSheet } from 'components/jss';
import Images from './images';
import { Content, FlexContainer, Container, Button, Link } from 'components/content';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component
//
const content = {
  title: 'Careers',
  subTitle: 'See our current openings',
  text: `We’re always looking for smart, motivated individuals to join us.
         If you’re looking for more than a job, go on and check our openings. We’d love to meet you.`,
  buttonLabel: 'Check Openings',
  buttonRoute: '/BecomeAgileActor',
};

//
// Define the CSS styles of the components
//
const style = {
  component: {
    backgroundColor: muiTheme.palette.blue600,
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    color: muiTheme.palette.white,
    backgroundColor: 'inherit',
  },
  backgroundImage: {
    backgroundImage: Images.HeroImage,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: '40% 45%',
  },
  title: {
    width: '70%',
  },
  subtitle: {
    width: '60%',
  },
  text: {
    width: '60%',
    marginTop: '70px',
    maxWidth: '624px',
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 1024px)': {
    backgroundImage: {
      backgroundSize: '55% 40%',
    },
    title: {
      width: '60%',
    },
    subtitle: {
      width: '50%',
    },
    text: {
      width: '50%',
    },
  },
  '@media (max-width: 767px)': {
    backgroundImage: {
      opacity: '0.2',
      backgroundSize: '95% 60%',
    },
    title: {
      width: '100%',
    },
    subtitle: {
      width: '100%',
    },
    text: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '11%',
    },
  },
  '@media (max-width: 700px)': {
    backgroundImage: {
      backgroundSize: '95% 55%',
      opacity: '0.2',
    },
  },
  '@media (max-width: 600px)': {
    backgroundImage: {
      backgroundSize: '95% 45%',
      opacity: '0.2',
    },
    text: {
      marginTop: '11%',
    },
  },
  '@media (max-width: 500px)': {
    backgroundImage: {
      backgroundSize: '95% 35%',
      opacity: '0.2',
    },
    text: {
      marginTop: '11%',
    },
  },
  '@media (max-width: 400px)': {
    backgroundImage: {
      backgroundSize: '95% 25%',
      opacity: '0.2',
    },
  },
};

//
// Define the component
//
const ValueProposition = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer largeContainer
          className={classes.container}
          column>
          <Content backgroundImage
            className={classes.backgroundImage} />
          <Content largeTitle
            className={classes.title}>
            {content.title}
          </Content>
          <Content largeSubTitle
            className={classes.subtitle}>
            {content.subTitle}
          </Content>
          <Content largeText
            className={classes.text}>
            {content.text}
          </Content>
          <Button
            secondary
            className={classes.button}
            containerElement={<Link to={content.buttonRoute} />}>
            {content.buttonLabel}
          </Button>
        </FlexContainer>
      </Container>
    </article>
  );
};

ValueProposition.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(ValueProposition, style);
