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

const {
  container,
  imgWrapper,
  img,
  title,
} = classes;

const MobileContent = () => {
  return (
    <Slider {...SliderSettings}>
      {content.practice.map((item) => (
        <div key={`aa-practice-${item.id}-item-m`}>
          <FlexContainer center key={`aa-practice-${item.id}-item-m`}>
            <Container container className={container}>
              <FlexContainer center className={imgWrapper}>
                <Content image className={img}>
                  {item.Img}
                </Content>
              </FlexContainer>
              <Content title className={title}>
                {item.title}
              </Content>
              <Content text>
                {item.content}
              </Content>
            </Container>
          </FlexContainer>
        </div>
      ))}
    </Slider>
  );
};

export default MobileContent;
