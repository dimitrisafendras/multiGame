import React from 'react';
import { useSheet } from 'components/common/jss';
import Images from './images';
import { Content, FlexContainer, Button, Link } from 'components/common/content';
import muiTheme from 'styles/customized-mui-theme';

//
// Define the content of the component
//
const content = {
  title: 'Agile Actors for Organizations',
  subTitle: 'Make sure your tech workforce fits your business needs',
  organisations: [
    {
      id: 'levelUp',
      Img: Images.OrganizationLevelUp,
      content: 'Level up your team',
      buttonLabel: 'How we can help you',
      buttonRoute: '/BecomeAgileActor',
    },
    {
      id: 'talent',
      Img: Images.OrganizationTalent,
      content: 'Get the right talent',
      buttonLabel: 'Learn More',
      buttonRoute: '/BecomeAgileActor',
    },
  ],
};

//
// Define the CSS styles of the components
//
const style = {
  outerContainer: {
    backgroundColor: muiTheme.palette.cyan400,
    color: muiTheme.palette.white,
  },
  outerTitle: {
    marginBottom: '4%',
    textAlign: 'center',
  },
  container: {
    marginLeft: '20px',
    marginRight: '20px',
  },
  subTitle: {
    display: 'none',
    textAlign: 'center',
  },
  innerTitleWrapper: {
    marginBottom: '50px',
  },
  innerTitle: {
    maxWidth: '210px',
    textAlign: 'center',
  },
  divider: {
    width: '50px',
    marginTop: '15px',
    borderBottom: '1px solid white',
  },
  text: {
    marginTop: '30px',
    marginBottom: '10px',
  },
  img: {
    height: '300px',
    width: '300px',
  },
  '@media (max-width: 1096px)': {
    outerTitle: {
      marginBottom: '15px',
    },
    subTitle: {
      display: 'block',
      marginBottom: '7%',
    },
    innerTitleWrapper: {
      display: 'none !important',
    },
  },
};

//
// Define the component
//
const Organizations = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <FlexContainer
        normalContainer
        center
        column
        className={classes.outerContainer}>
        <Content
          normalTitle
          className={classes.outerTitle}>
          {content.title}
        </Content>
        <Content
          normalSubTitle
          className={classes.subTitle}>
          {content.subTitle}
        </Content>
        <FlexContainer
          center
          wrap>
          <FlexContainer
            center
            column
            className={classes.container}>
            <Content
              image
              className={classes.img}>
              {content.organisations[0].Img}
            </Content>
            <Content
              subTitle
              className={classes.text}>
              {content.organisations[0].content}
            </Content>
            <Button
              primary
              containerElement={<Link to={content.organisations[0].buttonRoute} />}
              className={classes.button}>
              {content.organisations[0].buttonLabel}
            </Button>
          </FlexContainer>

          <FlexContainer
            center
            column
            className={classes.innerTitleWrapper}>
            <Content
              text
              className={classes.innerTitle}>
              {content.subTitle}
            </Content>
            <div className={classes.divider} />
          </FlexContainer>

          <FlexContainer
            center
            column
            className={classes.container}>
            <Content
              image
              className={classes.img}>
              {content.organisations[1].Img}
            </Content>
            <Content
              subTitle
              className={classes.text}>
              {content.organisations[1].content}
            </Content>
            <Button
              primary
              containerElement={<Link to={content.organisations[1].buttonRoute} />}
              className={classes.button}>
              {content.organisations[1].buttonLabel}
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </article>
  );
};

Organizations.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Organizations, style);
