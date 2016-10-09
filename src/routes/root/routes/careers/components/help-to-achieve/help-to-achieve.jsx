import React from 'react';
import { useSheet } from 'components/jss';
import { Content, Container, FlexContainer, Button, Link } from 'components/content';
import Slider from 'react-slick';

import content from './content';
import style from './style';

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: true,
};

type Props = {
  sheet: Object,
};

class HelpToAchieve extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      mq: window.matchMedia('(max-width: 767px)'),
    };
  }

  // Debounce window resize event for performance
  updateDimensions() {
    const that = this;

    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(function () {
      // Resize finished

      if (that.mounted) { // Check if component unmounted in the meantime
        const mediaQuery = window.matchMedia('(max-width: 767px)');

        if (mediaQuery.matches !== that.state.mq) {
          that.setState({
            slider: mediaQuery.matches,
          });
        }
      }
    }, 250);
  }

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    this.resizeTimer && clearTimeout(this.resizeTimer);
    this.mounted = false;
  }

  renderSliderOption() {
    const { classes } = this.props.sheet;

    return (
      <Slider {...SliderSettings}>
        {content.practice.map((item) =>
          (<div key={`aa-practice-${item.id}-item`}>
            <FlexContainer center>
              <Container container className={classes.container}>
                <FlexContainer center className={classes.imgWrapper}>
                  <Content image className={classes.img}>
                    {item.Img}
                  </Content>
                </FlexContainer>
                <Content title className={classes.title}>
                  {item.title}
                </Content>
                <Content text>
                  {item.content}
                </Content>
              </Container>
            </FlexContainer>
          </div>)
          )}
      </Slider>
    );
  }

  renderScrollOptionRow(from, size) {
    const { classes } = this.props.sheet;

    return content.practice.slice(from, size).map((item) => (
      <Container container className={classes.container}
        key={`aa-practice-${item.id}-item`}>
        <FlexContainer center className={classes.imgWrapper}>
          <Content image className={classes.img}>
            {item.Img}
          </Content>
        </FlexContainer>
        <Content title className={classes.title}>
          {item.title}
        </Content>
        <Content text>
          {item.content}
        </Content>
      </Container>
    ));
  }

  renderScrollOption() {
    const { classes } = this.props.sheet;

    return (
      <FlexContainer center wrap>
        <FlexContainer container className={classes.containerWrapper}>
          {this.renderScrollOptionRow(0, 2)}
        </FlexContainer>
        <FlexContainer container className={classes.containerWrapper}>
          {this.renderScrollOptionRow(2, 4)}
        </FlexContainer>
      </FlexContainer>
    );
  }

  render() {
    const { classes } = this.props.sheet;
    const { slider } = this.state;
    return (
      <article>
        <Container normalContainer className={classes.outerContainer}>
          <FlexContainer center>
            <Content normalTitle className={classes.outerTitle}>
              {content.title}
            </Content>
          </FlexContainer>

          {slider ? this.renderSliderOption() : this.renderScrollOption()}

          <FlexContainer center>
            <Button secondary className={classes.button}
              containerElement={<Link to={content.buttonRoute} />}>
              {content.buttonLabel}
            </Button>
          </FlexContainer>
        </Container>
      </article>
    );
  }
}

export default useSheet(HelpToAchieve, style);
