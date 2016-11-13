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
  link: (to: string) => void,
  size : Object,
};

const AgileActorsMethodology = ({
  link,
  size: {
    mobile,
    tablet,
  },
}: Props) => (
  <article>
    <Container outerContainer className={outerContainer}>
      <Content normalTitle className={outerTitle}>
        {content.title}
      </Content>

      {mobile ? <MobileContent /> : <NormalContent tablet={tablet} />}

      <FlexContainer center className={button}>
        <Button secondary onClick={() => link(content.buttonRoute)} >
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </Container>
  </article>
);

export default compose(linkAble, Resizable)(AgileActorsMethodology);
