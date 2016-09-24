import React from 'react';
import { useSheet } from 'components/jss';
import Images from './images';
import { Content, Container, FlexContainer, Button, Link } from 'components/content';
import muiTheme from 'styles/customized-mui-theme';
import Slider from 'react-slick';

//
// Define the content of the component
//
const content = {
  title: 'TEST',
  practice: [
    {
      id: 'methodologies',
      title: 'Agile Methodologies',
      Img: Images.Methodologies,
      content:
      `Scrum, Management 3.0 and everything that makes possible
      the development and maintenance of complex projects and applications.`,
    },
    {
      id: 'uiUx',
      title: 'UX / UI',
      Img: Images.UiUx,
      content:
      `Even if you’re not a Web Designer or a Frontend Developer, it’s essential to
      understand how users experience and interact with applications, what are the best
      practices and how to build things that make sense.`,
    },
    {
      id: 'swDevelopment',
      title: 'Software Development',
      Img: Images.SwDevelopment,
      content:
      `Frontend, backend, mobile, big data, event driven, responsive, integration
      and so on. Software development is more complex than ever and we’re here to
      carefully select and practice what’s relevant, useful and meaningful for the
      modern tech professional.`,
    },
    {
      id: 'coaching',
      title: 'Personal Coaching',
      Img: Images.Coaching,
      content:
      `Through practice, expert guidance and help, we’re making your career
      goals take shape. An Agile Actor is learning to be a coach and a coachee,
      evolving and maturing in both roles.`,
    },
  ],
  buttonLabel: 'Find out More',
  buttonRoute: '/BecomeAgileActor',
};

//
// Define the CSS styles of the components
//
const style = {
  outerContainer: {
    backgroundColor: muiTheme.palette.white,
  },
  outerTitle: {
    marginBottom: '6.1%',
    textAlign: 'center',
  },
  containerWrapper: {
    '&:first-child': {
      marginRight: '10px',
    },
    '&:last-child': {
      marginLeft: '10px',
    },
  },
  container: {
    backgroundColor: muiTheme.palette.grey200,
    marginLeft: '10px',
    marginRight: '10px',
    width: '306px',
    height: '460px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '35px',
    paddingRight: '35px',
    boxSizing: 'border-box',
    border: '2px solid #eee',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  imgWrapper: {
    backgroundColor: muiTheme.palette.white,
    width: '306px',
    height: '180px',
    marginTop: '-35px',
    marginBottom: '0px',
    marginLeft: '-35px',
    marginRight: '-35px',
  },
  img: {
    height: '90px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: muiTheme.palette.blue600,
    fontWeight: '300',
    marginTop: '35px',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1581px)': {
    containerWrapper: {
      '&:first-child': {
        marginRight: '5px',
        marginLeft: '5px',
        marginBottom: '20px',
      },
      '&:last-child': {
        marginRight: '5px',
        marginLeft: '5px',
      },
    },
  },
  '@media (max-width: 767px)': {
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};

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

class HelpToAchieve extends React.Component {
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
          center
          column
          className={classes.outerContainer}>
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

HelpToAchieve.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(HelpToAchieve, style);
