import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, Container, FlexContainer, Button } from 'components/common/content';

//
// Define the content of the component
//
const content = {
  title: 'Why Should I Join Agile Actors?',
  subTitle:
  'Web Developer, Product Manager, Mobile Engineer; it doesn’t matter what your business' +
  ' card says. If you a are a smart, motivated tech professional, join us to:',
  whyJoin: [
    {
      id: 'assess',
      Img: Images.Pawn,
      content: 'Find out where you stand as a professional and sharpen your' +
      'professional skills with assessments and training courses ranging from beginner to advanced',
    },
    {
      id: 'work',
      Img: Images.Horse,
      content: 'Work full-time on real-life, meaningful projects and make an impact on things ' +
      'that matter',
    },
    {
      id: 'coach',
      Img: Images.Queen,
      content: 'Get ongoing coaching from experienced teammates, ' +
      'while at the same time passing your knowledge to them',
    },
  ],
  buttonLabel: 'See our current openings',
  buttonLink: 'https://agileactors.workable.com',
};

//
// Define the CSS styles of the components
//
const style = {
  outerContainer: {
    backgroundColor: '#B1DEDE',
    backgroundImage: Images.BackgroundMountains,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    color: '#006064',
  },
  outerContainerTitle: {
    marginBottom: '20px',
  },
  outerContainerSubTitle: {
    maxWidth: '850px',
    marginBottom: '90px',
  },
  container: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '15px',
    marginRight: '15px',
  },
  text: {
    width: '360px',
    height: '69px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  img: {
    width: '230px',
    height: '70px',
    marginBottom: '30px',
  },
  button: {
    marginTop: '70px',
  },
  '@media (max-width: 1169px)': {
    container: {
      marginBottom: '30px',
    },
    '@media (max-width: 779px)': {
      text: {
        width: '280px',
        height: 'auto',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '30px',
      },
    },
  },
};

//
// Define the component
//
const WhyJoinAgileActors = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer normalContainer
        column
        className={classes.outerContainer}>
        <Content normalTitle
          className={classes.outerContainerTitle}>
          {content.title}
        </Content>
        <Content normalSubTitle
          className={classes.outerContainerSubTitle}>
          {content.subTitle}
        </Content>
        <FlexContainer
          fullWidthContainer
          wrap
          justifyContent={'space-around'}>

          {content.whyJoin.map((item) =>

            (<Container container
              className={classes.container}
              key={`aa-why-join-${item.id}-item`}>
              <Content image
                className={classes.img}>
                {item.Img}
              </Content>
              <Content text
                className={classes.text}>
                {item.content}
              </Content>
            </Container>)

          )}

        </FlexContainer>
        <Button
          href={content.buttonLink}
          target={'_black'}
          className={classes.button}>
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </article>
  );
};

WhyJoinAgileActors.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(WhyJoinAgileActors, style);
