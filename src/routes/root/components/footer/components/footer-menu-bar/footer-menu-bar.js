import React from 'react';

import { linkAble, contentAble } from 'routes/root/containers';

import {
  Container,
  FlexContainer,
  Content,
  Link,
} from 'components';

import { contentData } from './content';
import { classes } from './style';

const linkKey = (link) => `nav-footer--${link.replace(' ', '')}`;

type Props = {
  content: [],
  link: () => void,
};

export const FooterMenuBar = ({
  content,
  link,
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

export default contentAble(linkAble(FooterMenuBar));
