import React from 'react';

import { compose } from 'containers';

import { linkAble } from 'routes/root/containers';

import content from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Resizable,
  Button,
} from 'components';

import {
  NormalContent,
  MobileContent,
} from './components';

const {
  outerContainer,
  outerTitle,
  button,
} = classes;

type Props = {
  size: Object,
  link: (to: string) => void,
};

const AgileActorsPractice = ({
  size: {
    mobile,
  },
  link,
}: Props) => (
  <article>
    <Container outerContainer className={outerContainer}>
      <Content normalTitle className={outerTitle}>
        {content.title}
      </Content>

      {mobile ? <MobileContent /> : <NormalContent />}

      <FlexContainer center className={button}>
        <Button secondary onClick={() => link(content.buttonRoute)} >
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default compose(linkAble, Resizable)(AgileActorsPractice);