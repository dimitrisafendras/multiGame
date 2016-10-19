import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Resizable,
  Button,
  Link,
} from 'components';

import { linkAble } from 'routes/root/containers';

import {
  NormalContent,
  MobileContent,
} from './partials';

type Props = {
  size: Object,
  link: (to: string) => void,
};

const HelpToAchieve = ({ size: { mobile }, link }: Props) => (
  <article>
    <Container
      normalContainer
      className={classes.outerContainer}>
      <Content
        normalTitle
        className={classes.outerTitle}>
        {content.title}
      </Content>

      {mobile ? <MobileContent /> : <NormalContent />}

      <FlexContainer
        center
        className={classes.button}>
        <Button
          secondary
          onClick={() => link(content.buttonRoute)} >
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default linkAble(Resizable(HelpToAchieve));
