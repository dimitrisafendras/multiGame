import React from 'react';
import Slider from 'react-slick';
import { style } from './style';
import { content } from './content';
import { 
  useSheet, 
  Content, 
  Container, 
  FlexContainer, 
  Button, 
  Link 
} from 'components';

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
// The component
//
class AgileActorsPractice extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
  };

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

        (mediaQuery.matches !== that.state.mq) && that.setState({slider: !mediaQuery.matches});
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

  render() {
    const {classes} = this.props.sheet;
    let contentBoxes;

    if (this.state.slider) {
      contentBoxes =
        <FlexContainer
          center
          wrap>
          <FlexContainer
            container
            className={classes.containerWrapper}>
            {content.practice.slice(0, 2).map((item) =>
              (<Container
                container
                className={classes.container}
                key={`aa-practice-${item.id}-item`}>
                <FlexContainer
                  center
                  className={classes.imgWrapper}>
                  <Content
                    image
                    className={classes.img}>
                    {item.Img}
                  </Content>
                </FlexContainer>
                <Content
                  title
                  className={classes.title}>
                  {item.title}
                </Content>
                <Content text>
                  {item.content}
                </Content>
              </Container>)
              )}
          </FlexContainer>
          <FlexContainer
            container
            className={classes.containerWrapper}>
            {content.practice.slice(2, 4).map((item) =>
              (<Container
                container
                className={classes.container}
                key={`aa-practice-${item.id}-item`}>
                <FlexContainer
                  center
                  className={classes.imgWrapper}>
                  <Content
                    image
                    className={classes.img}>
                    {item.Img}
                  </Content>
                </FlexContainer>
                <Content
                  title
                  className={classes.title}>
                  {item.title}
                </Content>
                <Content text>
                  {item.content}
                </Content>
              </Container>)
              )}
          </FlexContainer>
        </FlexContainer>;
    } else {
      contentBoxes =
        <Slider
          {...SliderSettings}>
          {content.practice.map((item) =>
            (<div key={`aa-practice-${item.id}-item`}>
              <FlexContainer
                center>
                <Container
                  container
                  className={classes.container}>
                  <FlexContainer
                    center
                    className={classes.imgWrapper}>
                    <Content
                      image
                      className={classes.img}>
                      {item.Img}
                    </Content>
                  </FlexContainer>
                  <Content
                    title
                    className={classes.title}>
                    {item.title}
                  </Content>
                  <Content text>
                    {item.content}
                  </Content>
                </Container>
              </FlexContainer>
            </div>)
            )}
        </Slider>;
    }

    return (
      <article>
        <Container
          normalContainer
          className={classes.outerContainer}>
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

AgileActorsPractice.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsPractice, style);
