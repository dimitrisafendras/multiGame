import React from 'react';
import content from '../content';
import { classes } from '../style';

import {
  FlexContainer,
} from 'components';

import ContentItem from './content-item';

const {
  containerWrapper,
} = classes;

const firstRow = content.practice.slice(0, 2);
const secondRow = content.practice.slice(2, 4);

type Props = {
  rowItems: [ Object ],
};

const ContentRow = ({ rowItems }: Props) => (
  <FlexContainer container className={containerWrapper}>
    {rowItems.map((item) => (
      <ContentItem item={item} key={`aa-practice-${item.id}-item`} />
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
