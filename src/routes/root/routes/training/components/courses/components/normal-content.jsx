import React from 'react';
import content from '../content';
import classNames from 'classnames';
import { classes } from '../style';

import {
  Content,
  FlexContainer,
} from 'components';

const {
  backgroundLine,
  container,
  imgWrapper,
  textWrapper,
  img,
  title,
} = classes;

const key = (id) => `aa-methodology-${id}-item`;
const classImg = (index) => classNames(imgWrapper, classes[`itemImage_${index}`]);
const classText = (index) => classNames(textWrapper, classes[`itemText_${index}`]);

const NormalContent = () => (
  
  <div/>
  // <Content backgroundImage className={backgroundLine}>
  //   <FlexContainer column={!!tablet} wrap center>
  //
  //     {content.methodology.map((item, index) => (
  //
  //       <FlexContainer column={!tablet} className={container} key={key(item.id)}>
  //         <FlexContainer center className={classImg(index)}>
  //           <Content image className={img}>
  //             {item.Img}
  //           </Content>
  //         </FlexContainer>
  //
  //         <FlexContainer column className={classText(index)}>
  //           <Content title className={title}>
  //             {item.title}
  //           </Content>
  //           <Content text>
  //             {item.content}
  //           </Content>
  //         </FlexContainer>
  //       </FlexContainer>
  //
  //     ))}
  //
  //   </FlexContainer>
  // </Content>
);

export default NormalContent;
