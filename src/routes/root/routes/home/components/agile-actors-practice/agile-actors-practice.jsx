import React from 'react';

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
} from './partials';

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
  <Container normalContainer className={outerContainer}>
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
);

export default linkAble(Resizable(AgileActorsPractice));
