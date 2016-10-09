import React from 'react';
import { connect } from 'react-redux';

import { push } from 'react-router-redux';

import { contentData } from './content';
import { style } from './style';
import {
  useSheet,
  Container,
  FlexContainer,
  Content,
  Link,
} from 'components';

const linkKey = (link) => `nav-footer--${link.replace(' ', '')}`;

type Props = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  sheet: React.PropTypes.object,
};

const FooterMenuBar = ({
  content,
  link,
  sheet: { classes },
}: Props) => (
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

export default connect(
  ({ content }) => ({ content }),
  (dispatch) => ({
    link: (path) => {
      path.charAt(0) === '/' ? dispatch(push(path)) : window.open(path, '_newtab');
    },
  })
)(useSheet(FooterMenuBar, style));
