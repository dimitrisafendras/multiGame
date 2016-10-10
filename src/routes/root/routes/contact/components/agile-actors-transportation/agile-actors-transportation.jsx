import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'react-slick';
import { useSheet } from 'components/jss';
import { Content, Container, FlexContainer } from 'components/content';
import { content } from './content';
import { style } from './style';

//
// slider settings
//
const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: true,
};

//
// Define the component.
//
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

  render() {
    const { classes } = this.props.sheet;
    let meanBoxes;
    if (this.state.slider) {
      meanBoxes =
        <FlexContainer center>
          <Tabs className={classes.container} inkBarStyle={style.inkBar}>
            {content.means.map((mean) => (
              <Tab icon={mean.Img} label={mean.title} key={`aa-transportation-${mean.id}`}
                className={classes.title} disableTouchRipple>
                <Content largeText className={classes.subTitle}>
                  {mean.subtitle}
                </Content>
                <Content largeText className={classes.text}>
                  {mean.content}
                </Content>
              </Tab>
            ))}
          </Tabs>
        </FlexContainer>;
    } else
    {
      meanBoxes =
        <Slider
          {...SliderSettings}>
          {content.means.map((mean) =>
            (
            <div key={`aa-transportation-${mean.id}`}>
              <FlexContainer center>
                <Container
                  container
                  className={classes.container}>
                  <FlexContainer
                    center
                    className={classes.imgWrapper}>
                    <Content
                      image
                      className={classes.img}>
                      {mean.ImgMobile}
                    </Content>
                  </FlexContainer>
                  <Content
                    title
                    className={classes.title}>
                    {mean.title}
                  </Content>
                  <Content largeText className={classes.subTitle}>
                    {mean.subtitle}
                  </Content>
                  <Content largeText className={classes.text}>
                    {mean.content}
                  </Content>
                </Container>
              </FlexContainer>
            </div>
            )
            )}
        </Slider>;
    }
    return (
      <article>
        <Container normalContainer className={classes.component}>
          {meanBoxes}
        </Container>
      </article>
    );
  };
};

AgileActorsTransportation.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsTransportation, style);
