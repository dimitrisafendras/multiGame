import React from 'react';
import { Logo } from 'routes/root/components';
import { content } from './content';
import { classes } from './style';
import {
  useSheet,
  Content,
  FlexContainer,
  Container,
} from 'components';

const SocialMedia = () => (
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

export default SocialMedia;
