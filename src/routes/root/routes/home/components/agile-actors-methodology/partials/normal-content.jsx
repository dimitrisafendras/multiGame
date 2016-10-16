import React from 'react';
import { classes } from '../style';
import { content } from '../content';
import classNames from 'classnames';

import {
  Content,
  FlexContainer,
} from 'components';

const NormalContent = ({ tablet }) => {
  const changedirection = !!tablet;

  return (
    <Content
      backgroundImage
      className={classes.backgroundLine}>
      <FlexContainer
        column={changedirection}
        wrap
        center>

        {content.methodology.map((item, index) => (
          <FlexContainer
            column={!changedirection}
            className={classes.container}
            key={`aa-methodology-${item.id}-item`}>
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
        ))}

      </FlexContainer>
    </Content>
  );
};

export default NormalContent;
