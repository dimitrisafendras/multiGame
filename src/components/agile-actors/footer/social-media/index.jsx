import React from 'react';
import { useSheet } from 'components/common/jss';
import { Content, FlexContainer, Container } from 'components/common/content';
import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { Logo } from 'components/agile-actors';

//
// Define the content of the component.
//
const content = [
  {
    id: 'facebook',
    url: 'https://www.facebook.com/agileactors',
    Img: Images.Facebook,
    text: 'Like us',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/company/agile-actors',
    Img: Images.Linkedin,
    text: 'Join us',
  },
  {
    id: 'twitter',
    url: 'https://twitter.com/AgileActors',
    Img: Images.Twitter,
    text: 'Follow us',
  },
];

//
// Define the CSS styles of the component.
//
const style = {
  container: {
    backgroundColor: muiTheme.palette.grey100,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px',
    boxSizing: 'border-box',
  },
  logo: {
    height: '57px',
    width: '290px',
    marginRight: '20px',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  socialWrapper: {
    width: '335px',
    display: 'inherit',
    marginRight: '20px',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  socialContainer: {
    width: '70px',
    height: 'auto',
    marginRight: '22.5px',
    marginLeft: '22.5px',
  },
  socialLink: {
    textDecoration: 'none',
    color: muiTheme.palette.blue600,
  },
  socialImage: {
    backgroundColor: muiTheme.palette.white,
    width: '58px',
    height: '58px',
    borderRadius: '29px',
    boxSizing: 'border-box',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  socialText: {
    marginTop: '10px',
    textAlign: 'center',
  },
};

//
// Define the component.
//
const SocialMedia = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <FlexContainer fullWidthContainer
      center
      wrap
      className={classes.container}>
      <Content image>
        <Logo className={classes.logo} />
      </Content>
      <div className={classes.socialWrapper}>

        {content.map((social) =>

          (<Container container
            className={classes.socialContainer}
            key={`social-${social.id}-item`}>
            <a href={social.url}
              className={classes.socialLink}
              target={'_black'}>
              <Content image
                className={classes.socialImage}>
                {social.Img}
              </Content>
              <Content text
                className={classes.socialText}>
                {social.text}
              </Content>
            </a>
          </Container>)

        )}

      </div>
    </FlexContainer>
  );
};

SocialMedia.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(SocialMedia, style);
