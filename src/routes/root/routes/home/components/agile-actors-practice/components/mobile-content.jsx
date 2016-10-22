import React from 'react';
import Slider from 'react-slick';
import content from '../content';

import {
  FlexContainer,
  SliderSettings,
} from 'components';

import ContentItem from './content-item';

const key = (id) => `aa-practice-${id}-mob`;

const MobileContent = () => {
  return (
    <Slider {...SliderSettings}>
      {content.practice.map((item) => (
        <div key={key(item.id)}>
          <FlexContainer center>
            <ContentItem item={item} />
          </FlexContainer>
        </div>
      ))}
    </Slider>
  );
};

export default MobileContent;
