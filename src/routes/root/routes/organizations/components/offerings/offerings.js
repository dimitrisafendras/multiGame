import React from 'react';

import { compose } from 'store';
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
  link: (to: string) => void,
  size: Object,
};

const Offerings = ({ size: { mobile }, link }: Props) => (
  <article>
    <Container outerContainer className={outerContainer}>
      <Content normalTitle className={outerTitle}>
        {content.title}
      </Content>

      {mobile ? <MobileContent /> : <NormalContent />}

      <FlexContainer center className={button}>
        <Button secondary onTouchTap={() => link(content.buttonRoute)} >
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default compose(linkAble)(Resizable(Offerings));
