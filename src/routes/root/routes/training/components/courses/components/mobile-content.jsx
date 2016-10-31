import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import content from '../content';
import { Scrollbars } from 'react-custom-scrollbars';
import { classes } from '../style';

import {
  Content,
  Container,
  FlexContainer,
  SliderSettings,
} from 'components';

const {
  sectionTitleWrapper,
  sectionTitle,
  scrollableContent,
  textWrapper,
  title,
  text,
} = classes;

const sectionsKey = (id) => `aa-courses-sections-${id}`;
const sectionKey = (id) => `aa-courses-item-${id}`;

const MobileContent = () => (
  <Slider {...SliderSettings}>

    {content.sections.map((section) => (
      <div key={sectionsKey(section.id)}>
        <Container container>
          <Content title className={sectionTitleWrapper}>
            <span className={sectionTitle}>
              {section.title}
            </span>
          </Content>
          <Container container className={classNames(scrollableContent, classes[section.class])}>
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}>
              <div className={'tab-wrapper'}>

                {section.items.map((item) => (

                  <div key={sectionKey(item.id)} className={classNames('text-wrapper', textWrapper)}>

                    <FlexContainer column>
                      <Content title className={title}>
                        {item.title}
                      </Content>
                      <Content text className={text} dangerouslySetInnerHTML={{__html: item.content}} />
                    </FlexContainer>

                  </div>

                ))}

              </div>
            </Scrollbars>
          </Container>
          <div className={classes.fade} />
        </Container>
      </div>
    ))}

  </Slider>
);

export default MobileContent;
