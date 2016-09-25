import React from 'react';
import { useSheet } from 'components/jss';
import Images from './images';
import Slider from 'react-slick';
import { Content, FlexContainer, Container, Link } from 'components/content';

//
// Define the content of the component
//
const content = {
  title: 'What can Agile Actors do for you?',
  organizations: [
    {
      id: 'dreamteam',
      title:
        `Get a Tech Dream Team For
      Your Very Own Development Needs`,
      content:
        `Whether you’re planning to outsource a software development project
      or thinking about creating remote development teams, we can get you
      the best tech professionals. Save time and maintain focus on your line
      of business, while we define requirements and set up scalable teams
      with the right mix of skills and experience.`,
      button: 'Learn More',
      Img: Images.Dreamteam,
    },
    {
      id: 'tailormade',
      title:
        `Set up a Tailor-made
      Software Development Center`,
      content:
        `From a few developers to a full-scale, 100+ strong team,
      Agile Actors can help you set up a software development lab
      that fits your professional needs. Without interfering with
      your organization’s management teams or processes, we make sure
      that your tech squad gets high-level coaching and constant
      professional development while achieving its objectives.`,
      button: 'Find out more',
      Img: Images.Tailormade,
    },
    {
      id: 'techs',
      title:
        `Hire On-demand
      Tech Professionals`,
      content:
        `Need a skilled developer for that new product
      you’re planning to build? Or a seasoned Database Architect to help
      you organize all those bits and bytes of data your sales teams are
      generating? Agile Actors are here for you. We maintain a vast network of
      qualified professionals, whose skills are being constantly assessed
      and evaluated. No matter what your needs are, we can source, prepare
      and coach the ideal candidate for the task at hand.`,
      button: 'Get in touch',
      Img: Images.Techs,
    },
    {
      id: 'grow',
      title:
        `Coaching and Development
      For Your Entire Organization`,
      content:
        `Our state-of-the-art tools and agile methodologies can empower your
      whole tech team to take their game to the next level. From skills
      assessment, to personal training and career coaching, using our NextDot
      personal development methodology, we’re here to provide a learning path
      for your tech professionals to blossom and reach their full potential.`,
      button: 'Learn More',
      Img: Images.Grow,
    },
  ],
  buttonRoute: '/Contact',
};

//
// Define the CSS styles of the components
//
const style = {
  container: {
    display: 'block',
    paddingTop: '70px',
    paddingBottom: '70px',
    paddingLeft: '0px',
    paddingRight: '0px',
    maxWidth: '1920px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
  },
  fullWidthContainer: {
    width: '100%',
    textAlign: 'center',
  },
  title: {
    marginTop: '0px',
    marginBottom: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textWrapper: {
    boxSizing: 'border-box',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '60px',
    paddingRight: '60px',
    textAlign: 'left',
    width: '40%',
  },
  link: {
    display: 'block',
    color: '#00bbd6',
    marginTop: '20px',
    textDecoration: 'none',
  },
  img: {
    width: '60%',
    height: '400px',
  },
  '@media (max-width: 1430px)': {
    textWrapper: {
      width: '100%',
    },
    img: {
      width: '100%',
      height: '30%',
      marginBottom: '40px',
    },
  },
  test: {
    marginLeft: '-2px',
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

//
// Define the component
//
const Offerings = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article>
      <Container normalContainer
        className={classes.container}>
        <Content normalTitle
          className={classes.title}>
          {content.title}
        </Content>
        <Slider {...SliderSettings} >

          {content.organizations.map((slide) => (
            <div key={`aa-slider-${slide.id}-item`}>
              <FlexContainer fullWidthContainer
                center
                wrap={'reverse'} className={classes.test}>
                <div className={classes.textWrapper}>
                  <Content title>
                    {slide.title}
                  </Content>
                  <Content text>
                    {slide.content}
                  </Content>
                  <Link to={content.buttonRoute}
                    className={classes.link}>
                    {slide.button}
                  </Link>
                </div>
                <Content image className={classes.img}>
                  {slide.Img}
                </Content>
              </FlexContainer>
            </div>
          ))}

        </Slider>
      </Container>
    </article>
  );
};

Offerings.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(Offerings, style);
