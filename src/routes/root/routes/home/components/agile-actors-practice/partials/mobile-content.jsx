import React from 'react';
import { classes } from '../style';
import { content } from '../content';
import Slider from 'react-slick';

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
      {content.practice.map((item) =>
        (<div key={`aa-practice-${item.id}-item`}>
          <FlexContainer
            center>
            <Container
              container
              className={classes.container}>
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
            </Container>
          </FlexContainer>
        </div>)
      )}
    </Slider>
  );
};

export default MobileContent;
