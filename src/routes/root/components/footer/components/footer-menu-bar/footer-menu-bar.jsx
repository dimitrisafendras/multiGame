import React from 'react';
import { contentData } from './content';
import { style } from './style';
import { 
  useSheet,
  Container, 
  FlexContainer, 
  Content, 
  Link 
} from 'components';

const linkKey = (link) => `nav-footer--${link.replace(' ', '')}`;

const FooterMenuBar = ({ content, link, sheet }) => {
  const { classes } = sheet;

  return (
    <FlexContainer
      fullWidthContainer
      column
      className={classes.outerContainer}>
      <FlexContainer
        container
        wrap
        center
        className={classes.linksContainer}>
        {content.map((item) => (
          <Content
            key={linkKey(item.link)}
            className={classes.links}
            onClick={function () { link(item.link); }}>

            {item.title}
          </Content>
          ))}

      </FlexContainer>
      <Container
        container
        className={classes.copyrightContainer}>
        <Link to={'/'}
          className={classes.copyright}>
          {contentData.copyright}
        </Link>
      </Container>
    </FlexContainer>
  );
};

FooterMenuBar.propTypes = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  sheet: React.PropTypes.object,
};

export default useSheet(FooterMenuBar, style);
