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

import {
  NormalContent,
  MobileContent,
} from './partials';

type Props = {
  size: Object,
};

const HelpToAchieve = ({ size: { mobile } }: Props) => (
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
          containerElement={<Link to={content.buttonRoute} />} >
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default Resizable(HelpToAchieve);
