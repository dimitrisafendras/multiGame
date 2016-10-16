import React from 'react';
import { classes } from '../style';
import { content } from '../content';
import classNames from 'classnames';
import Slider from 'react-slick';
import {
  Content,
  FlexContainer,
  SliderSettings,
} from 'components';


console.log('SliderSettings', SliderSettings)

const MobileContent = () => {
  return (
    <Slider
      {...SliderSettings}>

      {content.methodology.map((item, index) => (
        <div key={`aa-methodology-${item.id}-item`}>
          <FlexContainer
            center
            column
            className={classes.container}>
            <FlexContainer
              center
              className={classNames(classes.imgWrapper, classes[`itemImage_${index}`])}>
              <Content
                image
                className={classes.img}>
                {item.Img}
              </Content>
            </FlexContainer>
            <FlexContainer
              className={classNames(classes.textWrapper, classes[`itemText_${index}`])}
              column>
              <Content
                title
                className={classes.title}>
                {item.title}
              </Content>
              <Content
                text>
                {item.content}
              </Content>
            </FlexContainer>
          </FlexContainer>
        </div>
      ))}
    </Slider>
  );
};

export default MobileContent;
