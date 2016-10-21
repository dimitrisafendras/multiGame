import React from 'react';
import Slider from 'react-slick';
import content from '../content';

import {
  FlexContainer,
  SliderSettings,
} from 'components';

import ContentItem from './content-item';

const MobileContent = () => {
  return (
    <Slider {...SliderSettings}>
      {content.practice.map((item) => (
        <div key={`aa-practice-${item.id}-item-m`}>
          <FlexContainer center>
            <ContentItem item={item} />
          </FlexContainer>
        </div>
      ))}
    </Slider>
  );
};

export default MobileContent;
