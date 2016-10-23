import React from 'react';

import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';
import Slider from 'react-slick';

import {
  Content,
  Container,
  FlexContainer,
} from 'components/content';

import { content } from './content';

import {
  classes,
  styles as style,
} from './style';

const {
  container,
  title,
  subTitle,
  text,
  imgWrapper,
  img,
} = classes;

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: true,
};

class AgileActorsTransportation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mq: window.matchMedia('(max-width: 767px)'),
    };
  };

  // Debounce window resize event for performance
  updateDimensions() {
    const that = this;

    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(function () {
      // Resize finished

      if (that.mounted) { // Check if component unmounted in the meantime
        const mediaQuery = window.matchMedia('(max-width: 767px)');

        (mediaQuery.matches !== that.state.mq) && that.setState({slider: !mediaQuery.matches});
      }
    }, 250);
  };

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.updateDimensions();
  };

  componentWillUnmount() {
    this.resizeTimer && clearTimeout(this.resizeTimer);
    this.mounted = false;
  };

  renderNonSliderContainer() {
    return (
      <FlexContainer center>
        <Tabs className={container} inkBarStyle={style.inkBar}>
          {content.means.map((mean) => (
            <Tab
              key={`aa-trans-ns-${mean.id}`}
              icon={mean.Img}
              label={mean.title}
              className={title} disableTouchRipple>
              <Content largeText className={subTitle}>
                {mean.subtitle}
              </Content>
              <Content largeText className={text}>
                {mean.content}
              </Content>
            </Tab>
          ))}
        </Tabs>
      </FlexContainer>
    );
  }

  renderSliderContainer() {
    return (
      <Slider {...SliderSettings}>
        {content.means.map((mean) => (
          <div key={`aa-trans-s-${mean.id}`}>
            <FlexContainer center>
              <Container container className={container}>
                <FlexContainer center className={imgWrapper}>
                  <Content image className={img}>
                    {mean.ImgMobile}
                  </Content>
                </FlexContainer>
                <Content title className={title}>
                  {mean.title}
                </Content>
                <Content largeText className={subTitle}>
                  {mean.subtitle}
                </Content>
                <Content largeText className={text}>
                  {mean.content}
                </Content>
              </Container>
            </FlexContainer>
          </div>
        ))}
      </Slider>
    );
  }

  render() {
    return (
      <article>
        <Container normalContainer className={classes.component}>
          {this.state.slider ? (
            this.renderNonSliderContainer()
          ) : (
            this.renderSliderContainer()
          )}
        </Container>
      </article>
    );
  };
};

export default AgileActorsTransportation;
