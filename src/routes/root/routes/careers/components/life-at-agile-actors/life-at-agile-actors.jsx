import React from 'react';
import Slider from 'react-slick';
import Images from './images';
import { content } from './content';
import { classes } from './style';
import {
  useSheet,
  Content,
  Container,
  FlexContainer,
  Button,
  Link,
  SliderSettings,
} from 'components';

const LifeAtAgileActors = () => {

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer fullWidthContainer
                       className={classes.container}
                       column>
          <Container
            container
            className={classes.imagesContainer}>
            <Slider
              {...SliderSettings}>

              {Images.map((image, index) =>(
                <div key={`life-at-aa-${index}-item`}
                     className={classes.imagesWrapper}>
                  <img src={image}
                       className={classes.image} />
                </div>
              ))}

            </Slider>
          </Container>
          <Container
            container
            className={classes.textWrapper}>
            <Content normalTitle
                     className={classes.title}>
              {content.title}
            </Content>
            <Content text
                     className={classes.text}>
              {content.text}
            </Content>
          </Container>
        </FlexContainer>
      </Container>
    </article>
  );
};

export default LifeAtAgileActors;