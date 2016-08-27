import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, Container, FlexContainer } from 'components/common/content';
import { grey200 } from 'material-ui/styles/colors';

//
// Define the component
//
const content = {
  title: 'An organization built to help you achieve',
  achievementPaths: [
    {
      id: 'tools',
      title: 'Tools',
      Img: Images.Tools,
      content:
      `Great work needs great tools. We make sure you have exactly what
      you need to get the job done without breaking a sweat..`,
    },
    {
      id: 'personal-dev',
      title: 'Personal development',
      Img: Images.PersonalDev,
      content:
      `No matter how experienced or inexperienced you are, at Agile Actors
      we care about what you can be and we’re by your side while you’re getting
      there. You’ll be working with smart, skilled people, learn from the best
      and trained to reach for the stars.`,
    },
    {
      id: 'fun',
      title: 'Fun',
      Img: Images.Fun,
      content:
      `Work is a big part of your life and we’re well-aware of that. Having
      fun while you’re doing it is equally important. Our culture and
      workplace are designed around breaking the daily routine and
      battling stress before it even appears.`,
    },
    {
      id: 'respect',
      title: 'Respect',
      Img: Images.Respect,
      content:
      `We are respectful, open-minded and only care about being good at what
      you do. Your gender, sexual preferences, skin color, language or
      family name won’t make a difference here.`,
    },
  ],
};

const style = {
  outerContainer: {
    backgroundColor: grey200,
  },
  container: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '15px',
    marginRight: '15px',
  },
  textWrapper: {
    width: '230px',
    height: '263px',
    textAlign: 'left',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '0px',
    paddingRight: '0px',

  },
  img: {
    width: '160px',
    height: '160px',
    marginTop: '40px',
    marginBottom: '25px',
    marginLeft: '0px',
    marginRight: '0px',
    paddingLeft: '30px',
  },
  '@media (max-width: 519px)': {
    container: {
      height: 'auto',
    },
  },
};

//
// Define the component
//
function HelpToAchieve({ sheet }) {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer normalContainer
        column
        className={classes.outerContainer}>
        <Content normalTitle>
          {content.title}
        </Content>

        <FlexContainer fullWidthContainer
          wrap justifyContent={'space-around'}>
          {content.achievementPaths.map((item) =>
            (<Container container
              className={classes.container}
              key={`aa-practice-${item.id}-item`}>
              <Content image
                className={classes.img}>
                {item.Img}
              </Content>
              <div className={classes.textWrapper}>
                <Content title>
                  {item.title}
                </Content>
                <Content text>
                  {item.content}
                </Content>
              </div>
            </Container>)
          )}
        </FlexContainer>
      </FlexContainer>
    </article>
  );
};

HelpToAchieve.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(HelpToAchieve, style);
