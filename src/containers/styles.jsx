import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from 'styles/customized-mui-theme';
import { Scrollbars } from 'react-custom-scrollbars';

//
// Include project styles
// import src/styles/index.js
//
import 'styles';

// console.log('containers/styles -> customizedMuiTheme ', muiTheme);

export const palette = muiTheme.palette;

const style = {
  fontFamily: muiTheme.fontFamily,
  color: muiTheme.palette.white,
  width: '100%',
  height: '100%',
  position: 'relative',
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export class Styles extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentWillReceiveProps() {
    if (this.scrollbar) {
      this.scrollbar.scrollToTop();
    }
  }

  render() {
    const _this = this;
    return (
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        ref={function (ref) { _this.scrollbar = ref; }}>

        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={style}>
            {this.props.children}
          </div>
        </MuiThemeProvider>

      </Scrollbars>
    );
  }
}

export default Styles;
