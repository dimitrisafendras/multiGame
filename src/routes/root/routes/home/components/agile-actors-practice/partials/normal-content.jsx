import React from 'react';
import content from '../content';
import { classes } from '../style';

import {
  Content,
  Container,
  FlexContainer,
} from 'components';

const {
  containerWrapper,
  container,
  imgWrapper,
  img,
  title,
} = classes;

type Props = {
  rowItems: [ Object ],
};

const firstRow = content.practice.slice(0, 2);
const secondRow = content.practice.slice(2, 4);

const ContentRow = ({ rowItems }: Props) => (
  <FlexContainer container className={containerWrapper}>
    {rowItems.map((item) => (
      <Container container className={container} key={`aa-practice-${item.id}-item`}>
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
    ))}
  </FlexContainer>
);

const NormalContent = () => (
  <FlexContainer center wrap>
    <ContentRow rowItems={firstRow} />
    <ContentRow rowItems={secondRow} />
  </FlexContainer>
);

export default NormalContent;
