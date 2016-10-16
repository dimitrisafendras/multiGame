import React from 'react';
import { classes } from '../style';
import { content } from '../content';

import {
  Content,
  Container,
  FlexContainer,
} from 'components';

const NormalContent = () => {
  return (
    <FlexContainer
      center
      wrap>
      <FlexContainer
        container
        className={classes.containerWrapper}>
        {content.help.slice(0, 2).map((item) =>
          (<Container
            container
            className={classes.container}
            key={`aa-help-${item.id}-item`}>
            <FlexContainer
              center
              className={classes.imgWrapper}>
              <Content
                image>
                {item.Img}
              </Content>
            </FlexContainer>
            <Content
              title
              className={classes.title}>
              {item.title}
            </Content>
            <Content text>
              {item.content}
            </Content>
          </Container>)
        )}
      </FlexContainer>
      <FlexContainer
        container
        className={classes.containerWrapper}>
        {content.help.slice(2, 4).map((item) =>
          (<Container
            container
            className={classes.container}
            key={`aa-help-${item.id}-item`}>
            <FlexContainer
              center
              className={classes.imgWrapper}>
              <Content
                image
                className={classes.img}>
                {item.Img}
              </Content>
            </FlexContainer>
            <Content
              title
              className={classes.title}>
              {item.title}
            </Content>
            <Content text>
              {item.content}
            </Content>
          </Container>)
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default NormalContent;
