import React from 'react';
import content from '../content';
import { classes } from '../style';

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
        {content.offerings.slice(0, 2).map((item) =>
          (<Container
            container
            className={classes.container}
            key={`aa-offerings-${item.id}-item`}>
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
        {content.offerings.slice(2, 4).map((item) =>
          (<Container
            container
            className={classes.container}
            key={`aa-offerings-${item.id}-item`}>
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
