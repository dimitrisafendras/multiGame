import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, FlexContainer } from 'components/common/content';
import { cyan900, grey200 } from 'material-ui/styles/colors';

const content = {
  text1: 'We are tech professionals with a drive for a fulfilling career that will help us' +
  ' discover our true talents and abilities.',
  text2: 'We work to become an accessible, engaging and meaningful ecosystem where other ' +
  'ambitious tech professionals can unlock their potential and achieve their life goals. We ' +
  'believe that continuous education is vital to every conscious human and we seek to empower' +
  ' our people to advance their careers and personalities.',
  text3: 'We believe in self awareness, method, evolving objectives and continuous improvement.' +
  ' We value trust, transparency, ethical values and agility. We know that learning is a ' +
  'lifelong experience. We envision all tech professionals as Agile Actors, able tosucceed not' +
  ' just in work but also in life.',
  image: Images.Vision,
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    boxSizing: 'border-box',
    backgroundColor: grey200,
    color: cyan900,
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  textContainer: {
    maxWidth: '600px',
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'left',
  },
  textItem: {
    marginBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  imgContainer: {
    maxWidth: '600px',
    position: 'relative',
    top: '120px',
    marginLeft: '20px',
    alignItems: 'center',
  },
  img: {
    width: '450px',
    height: '400px',
  },
  '@media (max-width: 1149px)': {
    textContainer: {
      marginBottom: '30px',
    },
    imgContainer: {
      top: '0px',
      marginLeft: 'calc(100% - 230px)',
    },
    img: {
      width: '230px',
      height: '180px',
    },
  },
};

//
// Define the component
//
function AgileActorsVision({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer normalContainer
        wrap
        className={classes.container}>
        <div className={classes.textContainer}>
          <Content text className={classes.textItem}>
            {content.text1}
          </Content>
          <Content text className={classes.textItem}>
            {content.text2}
          </Content>
          <Content text className={classes.textItem}>
            {content.text3}
          </Content>
        </div>
        <div className={classes.imgContainer}>
          <Content image
            className={classes.img}>
            <content.image />
          </Content>
        </div>
      </FlexContainer>
    </article>
);
};

AgileActorsVision.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsVision, style);
