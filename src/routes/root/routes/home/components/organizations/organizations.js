import React from 'react';

import { compose } from 'containers';
import { linkAble } from 'routes/root/containers';

import content from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Button,
} from 'components';

const {
  levelUp,
  talent,
} = content.organisations;

const {
  innerTitleWrapper,
  innerTitle,
  outerContainer,
  outerTitle,
  subTitle,
  container,
  img,
  text,
  button,
  divider,
} = classes;

type Props = {
  link: (to: string) => void,
};

const Organizations = ({ link }: Props) => (
  <article>
    <Container outerContainer className={outerContainer}>
      <Content normalTitle className={outerTitle}>
        {content.title}
      </Content>
      <Content normalSubTitle className={subTitle}>
        {content.subTitle}
      </Content>
      <FlexContainer center wrap>
        <FlexContainer center column className={container}>
          <Content image className={img}>
            {levelUp.Img}
          </Content>
          <Content subTitle className={text}>
            {levelUp.content}
          </Content>
          <Button primary className={button} onClick={() => link(levelUp.buttonRoute)}>
            {levelUp.buttonLabel}
          </Button>
        </FlexContainer>

        <FlexContainer center column className={innerTitleWrapper}>
          <Content text className={innerTitle}>
            {content.subTitle}
          </Content>
          <div className={divider} />
        </FlexContainer>

        <FlexContainer center column className={container}>
          <Content image className={img}>
            {talent.Img}
          </Content>
          <Content subTitle className={text}>
            {talent.content}
          </Content>
          <Button primary className={button} onClick={() => link(talent.buttonRoute)}>
            {talent.buttonLabel}
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Container>
  </article>
);

export default compose(linkAble)(Organizations);
