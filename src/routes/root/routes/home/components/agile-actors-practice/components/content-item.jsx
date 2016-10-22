import React from 'react';
import { classes } from '../style';

import {
  Content,
  Container,
  FlexContainer,
} from 'components';

const {
  container,
  imgWrapper,
  img,
  title,
} = classes;

type Props = {
  item: Object,
};

const ContentItem = ({ item }: Props) => (
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
);

export default ContentItem;
