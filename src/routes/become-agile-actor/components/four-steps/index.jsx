import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, Container, FlexContainer, Button, Link } from 'components/common/content';

//
// Define the content of the component
//
const content = {
  title: 'What You will Practice As An Agile Actor',
  fourSteps: [
    {
      id: 'target',
      title: 'Target',
      Img: Images.Target,
      content: 'You are the product owner of the most interesting of products: yourself. ' +
      'An Agile Actor defines the backlog and the roadmap of the skills, knowledge and insight ' +
      'to be gained.',
    },
    {
      id: 'measure',
      title: 'Measure',
      Img: Images.Measure,
      content: 'Knowing where you stand is key to your success. Your strengths, abilities, ' +
      'skills to acquire or work on. Measure your current status and find out how you compare ' +
      'to thousands of professionals worldwide.',
    },
    {
      id: 'prioritize',
      title: 'Prioritize',
      Img: Images.Prioritize,
      content: 'Collaborate with other Agile Actors to set achievable short-term goals and ' +
      'work towards reaching them. We will help you select the right mix of training, mentoring ' +
      'and real-life work. In addition, you’ll be learning by closely studying other ' +
      'people’s professional paths.',
    },
    {
      id: 'act',
      title: 'Act',
      Img: Images.Act,
      content: 'Execute what you have planned within the timeframe you have defined. Share your ' +
      'progress and get help from fellow Agile Actors. Need to show off your achievements? ' +
      'We can show you the right way to do it.',
    },
  ],
  buttonLabel: 'Join us',
  buttonRoute: '/Careers',
};

//
// Define the CSS styles of the components
//
const style = {
  outerContainerTitle: {
    marginBottom: '70px',
  },
  container: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  textWrapper: {
    width: '250px',
    height: '184px',
  },
  img: {
    width: '250px',
    height: '150px',
    marginBottom: '20px',
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 579px)': {
    textWrapper: {
      height: 'auto',
      marginBottom: '50px',
    },
  },
};

//
// Define the component
//
const FourSteps = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer normalContainer
        column>
        <Content normalTitle
          className={classes.outerContainerTitle}>
          {content.title}
        </Content>

        <FlexContainer fullWidthContainer
          wrap
          justifyContent={'space-around'}>
          {content.fourSteps.map((item) =>

            (<Container container
              className={classes.container}
              key={`aa-4s-${item.id}-item`}>
              <Content image
                className={classes.img}>
                {item.Img}
              </Content>
              <div className={classes.textWrapper}>
                <Content text>
                  {item.content}
                </Content>
              </div>
            </Container>)

          )}
        </FlexContainer>

        <Button
          containerElement={<Link to={content.buttonRoute} />}
          className={classes.button}>
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </article>
  );
};

FourSteps.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(FourSteps, style);
