import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import content from '../content';
import { classes } from '../style';

import {
  Content,
  FlexContainer,
  SliderSettings,
} from 'components';

const {
  container,
  imgWrapper,
  img,
  textWrapper,
  title,
} = classes;

const key = (id) => `aa-meth-mob-${id}`;
const classImg = (index) => classNames(imgWrapper, classes[`itemImage_${index}`]);
const classText = (index) => classNames(textWrapper, classes[`itemText_${index}`]);

const MobileContent = () => (
  <Slider
    {...SliderSettings}>

    {content.methodology.map((item, index) => (
      <div key={key(item.id)}>
        <FlexContainer center column className={container}>
          <FlexContainer center className={classImg(index)}>
            <Content image className={img}>
              {item.Img}
            </Content>
          </FlexContainer>
          <FlexContainer column className={classText(index)}>
            <Content title className={title}>
              {item.title}
            </Content>
            <Content text>
              {item.content}
            </Content>
          </FlexContainer>
        </FlexContainer>
      </div>
    ))}
  </Slider>
);

export default MobileContent;
