import React from 'react';
import { Container, FlexContainer, Content, Link } from 'components/common/content';
import { useSheet } from 'components/common/jss';
import muiTheme from 'styles/customized-mui-theme';

// import { blueGrey400 } from 'material-ui/styles/colors';

const linkKey = (link) => `nav-footer--${link.replace(' ', '')}`;

const componentContent = {
  copyright: '© 2016 Agile Actors, All Rights Reserved',
};

const style = {
  outerContainer: {
    backgroundColor: muiTheme.palette.grey100,
    color: muiTheme.palette.blue600,
    fontWeight: '700',
  },
  linksContainer: {
    borderTop: '1px solid ' + muiTheme.palette.borderColor,
  },
  links: {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '13px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  copyrightContainer: {
    lineHeight: '60px',
    height: '60px',
    textAlign: 'center',
    borderBottom: '3px solid ' + muiTheme.palette.blue600,
  },
  copyright: {
    color: muiTheme.palette.blue600,
    fontSize: '12px',
    textDecoration: 'none',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const FooterMenuBar = ({ content, link, sheet }) => {
  const { classes } = sheet;

  return (
    <FlexContainer
      fullWidthContainer
      column
      className={classes.outerContainer}>
      <FlexContainer
        container
        wrap
        center
        className={classes.linksContainer}>
        {content.map((item) => (
          <Content
            key={linkKey(item.link)}
            className={classes.links}
            onClick={function () { link(item.link); }}>

            {item.title}
          </Content>
          ))}

      </FlexContainer>
      <Container
        container
        className={classes.copyrightContainer}>
        <Link to={'/'}
          className={classes.copyright}>
          {componentContent.copyright}
        </Link>
      </Container>
    </FlexContainer>
  );
};

FooterMenuBar.propTypes = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  sheet: React.PropTypes.object,
};

export default useSheet(FooterMenuBar, style);
