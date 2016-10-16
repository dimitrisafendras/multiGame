import React from 'react';
import { classes } from './style';
import { content } from './content';
import { NormalContent, MobileContent } from './partials';
import {
  Content,
  Container,
  FlexContainer,
  Resizable,
  Button,
  Link,
} from 'components';

class AgileActorsMethodology extends React.Component {
  
  render() {
    const contentBoxes = this.props.size.mobile ? <MobileContent /> : <NormalContent tablet={this.props.size.tablet} />;

    return (
      <article>
        <Container normalContainer>
          <Content
            normalTitle
            className={classes.outerTitle}>
            {content.title}
          </Content>

          {contentBoxes}

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
  }
}

export default Resizable(AgileActorsMethodology);
