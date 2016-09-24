import React from 'react';
import classNames from 'classnames';
import { style } from './style';
import { content } from './content';
import Slider from 'react-slick';
import {
  useSheet,
  Content,
  Container,
  FlexContainer,
  Button,
  Link,
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

class AgileActorsMethodology extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      mqTablet: window.matchMedia('(max-width: 1581px)'),
      mqMobile: window.matchMedia('(max-width: 767px)'),
    };
  }

  // Debounce window resize event for performance
  updateDimensions() {
    const that = this;

    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(function () {
      // Resize finished
      if (that.mounted) { // Check if component unmounted in the meantime
        const mediaQueryTablet = window.matchMedia('(max-width: 1581px)');
        const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

        (mediaQueryTablet.matches !== that.state.mqTablet) && that.setState({tablet: mediaQueryTablet.matches});
        (mediaQueryMobile.matches !== that.state.mqMobile) && that.setState({mobile: mediaQueryMobile.matches});
      }
    });
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

  renderMobileContentBoxes() {
    const { classes } = this.props.sheet;
    return (
      <Slider
        {...SliderSettings}>

        {content.methodology.map((item, index) => (
          <div key={`aa-methodology-${item.id}-item`}>
            <FlexContainer
              center
              column
              className={classes.container}>
              <FlexContainer
                center
                className={classNames(classes.imgWrapper, classes[`itemImage_${index}`])}>
                <Content
                  image
                  className={classes.img}>
                  {item.Img}
                </Content>
              </FlexContainer>
              <FlexContainer
                className={classNames(classes.textWrapper, classes[`itemText_${index}`])}
                column>
                <Content
                  title
                  className={classes.title}>
                  {item.title}
                </Content>
                <Content
                  text>
                  {item.content}
                </Content>
              </FlexContainer>
            </FlexContainer>
          </div>
        ))}
      </Slider>
    );
  }

  renderContentBoxes() {
    const { classes } = this.props.sheet;
    const changedirection = !!this.state.tablet;

    return (
      <Content
        backgroundImage
        className={classes.backgroundLine}>
        <FlexContainer
          column={changedirection}
          wrap
          center>

          {content.methodology.map((item, index) => (
            <FlexContainer
              column={!changedirection}
              className={classes.container}
              key={`aa-methodology-${item.id}-item`}>
              <FlexContainer
                center
                className={classNames(classes.imgWrapper, classes[`itemImage_${index}`])}>
                <Content
                  image
                  className={classes.img}>
                  {item.Img}
                </Content>
              </FlexContainer>
              <FlexContainer
                className={classNames(classes.textWrapper, classes[`itemText_${index}`])}
                column>
                <Content
                  title
                  className={classes.title}>
                  {item.title}
                </Content>
                <Content
                  text>
                  {item.content}
                </Content>
              </FlexContainer>
            </FlexContainer>
          ))}

        </FlexContainer>
      </Content>
    );
  }

  render() {
    const { classes } = this.props.sheet;
    const contentBoxes =
    this.state.mobile ? this.renderMobileContentBoxes() : this.renderContentBoxes();

    return (
      <article>
        <Container normalContainer>
          <FlexContainer
            center>
            <Content
              normalTitle
              className={classes.outerTitle}>
              {content.title}
            </Content>
          </FlexContainer>

          {contentBoxes}

          <FlexContainer
            center>
            <Button
              secondary
              containerElement={<Link to={content.buttonRoute} />}
              className={classes.button}>
              {content.buttonLabel}
            </Button>
          </FlexContainer>
        </Container>
      </article>
    );
  }
}

export default useSheet(AgileActorsMethodology, style);
