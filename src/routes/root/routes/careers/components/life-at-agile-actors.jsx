import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
/* import Images from './images'; */

//
// Define the content of the component
//
const content = {
  title: 'Life at Agile Actors',
  text: 'We’re working every single day to become the environment of choice for motivated tech' +
  ' professionals that want to explore, blossom and mature their talents, skills, knowledge and ' +
  'character. This means we spend time thinking of how the modern tech professionals work,' +
  ' interact with people and the world around them.To us, every professional is a human being ' +
  'with needs dreams and taste. We don’t want to work much but effectively. We want to cooperate' +
  ' and coexist in a place where there’s excitement, fun, transparency and a sense of ' +
  'accomplishment.',
  image: '/images/careers/photo-life-at-agile-actors.png',
};

//
// Define the CSS styles of the components
//
const style = {
  textWrapper: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '25px',
    marginRight: '5%',
    maxWidth: '405px',
    textAlign: 'left',
  },
  imgWrapper: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '25px',
    maxWidth: '500px',

  },
  img: {
    width: '100%',
    height: '100%',
  },
  '@media (max-width: 1005px)': {
    imgWrapper: {
      marginBottom: '30px',
    },
  },
};

//
// Define the component
//
function LifeAtAgileActors({ sheet }) {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer normalContainer
        wrap>
        <Content image
          className={classes.imgWrapper}>
          <img
            className={classes.img}
            src={content.image} />
        </Content>
        <div className={classes.textWrapper}>
          <Content title>
            {content.title}
          </Content>
          <Content text>
            {content.text}
          </Content>
        </div>
      </FlexContainer>
    </article>
);
};

LifeAtAgileActors.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(LifeAtAgileActors, style);
