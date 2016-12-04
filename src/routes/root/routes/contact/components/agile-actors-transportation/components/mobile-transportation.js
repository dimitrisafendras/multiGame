import React from 'react';
import Slider from 'react-slick';

import {
  Content,
  Container,
  FlexContainer,
  SliderSettings,
} from 'components';

import { content } from '../content';

import {
  classes,
} from '../style';

const {
  container,
  titleWrapper,
  title,
  subTitle,
  text,
  imgWrapper,
  img,
} = classes;

const MobileTransportation = () => (
  <Slider {...SliderSettings}>
    {content.means.map((mean) => (
      <div key={`aa-trans-s-${mean.id}`}>
        <FlexContainer center>
          <Container container className={container}>
            <FlexContainer center className={imgWrapper}>
              <Content image className={img}>
                {mean.ImgActive}
              </Content>
            </FlexContainer>
            <Content title className={titleWrapper}>
              <span className={title}>
                {mean.title}
              </span>
            </Content>
            <Content largeText className={subTitle}>
              {mean.subtitle}
            </Content>
            <Content largeText className={text}>
              {mean.content}
            </Content>
          </Container>
        </FlexContainer>
      </div>
    ))}
  </Slider>
);
export default MobileTransportation;
