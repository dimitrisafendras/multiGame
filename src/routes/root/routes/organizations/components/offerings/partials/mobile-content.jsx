import React from 'react';
import Slider from 'react-slick';
import content from '../content';
import { classes } from '../style';

import {
  Content,
  Container,
  FlexContainer,
  SliderSettings,
} from 'components';

const MobileContent = () => {
  return (
    <Slider
      {...SliderSettings}>
      {content.offerings.map((item) =>
        (<div key={`aa-offerings-${item.id}-item`}>
          <FlexContainer
            center>
            <Container
              container
              className={classes.container}>
              <Content
                title
                className={classes.title}>
                {item.title}
              </Content>
              <Content text>
                {item.content}
              </Content>
            </Container>
          </FlexContainer>
        </div>)
      )}
    </Slider>
  );
};

export default MobileContent;
