webpackJsonp([1],{

/***/ 1379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dashboard = undefined;
	
	var _dashboard = __webpack_require__(1380);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Dashboard = _dashboard2.default;

/***/ },

/***/ 1380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _containers = __webpack_require__(378);
	
	var _containers2 = __webpack_require__(380);
	
	var _components = __webpack_require__(1381);
	
	exports.default = (0, _containers.compose)(_containers2.userAble)(_components.Dashboard);

/***/ },

/***/ 1381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dashboard = undefined;
	
	var _dashboard = __webpack_require__(1382);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Dashboard = _dashboard2.default;

/***/ },

/***/ 1382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dashboard = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(850);
	
	var _style = __webpack_require__(1383);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Dashboard = exports.Dashboard = function Dashboard(_ref) {
	  var _ref$user = _ref.user,
	      displayName = _ref$user.displayName,
	      email = _ref$user.email;
	  return _react2.default.createElement(
	    'article',
	    {
	      className: _style.classes.component },
	    _react2.default.createElement(
	      _components.Container,
	      {
	        container: true,
	        className: _style.classes.contentWrapper },
	      _react2.default.createElement(
	        _components.FlexContainer,
	        {
	          column: true,
	          outerContainer: true,
	          className: _style.classes.container },
	        _react2.default.createElement(
	          _components.Content,
	          {
	            largeSubTitle: true,
	            className: _style.classes.subtitle },
	          displayName
	        ),
	        _react2.default.createElement(
	          _components.Content,
	          {
	            largeSubTitle: true,
	            className: _style.classes.subtitle },
	          email
	        )
	      )
	    )
	  );
	};
	
	Dashboard.propTypes = {
	  user: __webpack_require__(2).PropTypes.shape({
	    displayName: __webpack_require__(2).PropTypes.string,
	    email: __webpack_require__(2).PropTypes.string
	  }).isRequired
	};
	exports.default = Dashboard;

/***/ },

/***/ 1383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.classes = exports.styles = undefined;
	
	var _customizedMuiTheme = __webpack_require__(443);
	
	var _customizedMuiTheme2 = _interopRequireDefault(_customizedMuiTheme);
	
	var _components = __webpack_require__(850);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  component: {
	    backgroundColor: _customizedMuiTheme2.default.palette.blue600,
	    display: 'flex',
	    justifyContent: 'center'
	  },
	  contentWrapper: {
	    width: '100%',
	    maxWidth: _customizedMuiTheme2.default.appBar.maxWidth
	  },
	  container: {
	    color: _customizedMuiTheme2.default.palette.white,
	    backgroundColor: 'inherit'
	  },
	  title: {
	    width: '70%'
	  },
	  subtitle: {
	    width: '60%'
	  },
	  text: {
	    width: '60%',
	    marginTop: '70px',
	    maxWidth: '624px'
	  },
	  button: {
	    marginTop: '50px'
	  },
	  '@media (max-width: 1024px)': {
	    backgroundImage: {
	      backgroundSize: '55% 40%'
	    },
	    title: {
	      width: '60%'
	    },
	    subtitle: {
	      width: '50%'
	    },
	    text: {
	      width: '50%'
	    }
	  },
	  '@media (max-width: 767px)': {
	    backgroundImage: {
	      opacity: '0.2',
	      backgroundSize: '95% 60%'
	    },
	    title: {
	      width: '100%'
	    },
	    subtitle: {
	      width: '100%'
	    },
	    text: {
	      width: '100%',
	      maxWidth: '100%',
	      marginTop: '11%'
	    }
	  },
	  '@media (max-width: 700px)': {
	    backgroundImage: {
	      backgroundSize: '95% 55%',
	      opacity: '0.2'
	    }
	  },
	  '@media (max-width: 600px)': {
	    backgroundImage: {
	      backgroundSize: '95% 45%',
	      opacity: '0.2'
	    },
	    text: {
	      marginTop: '11%'
	    }
	  },
	  '@media (max-width: 500px)': {
	    backgroundImage: {
	      backgroundSize: '95% 35%',
	      opacity: '0.2'
	    },
	    text: {
	      marginTop: '11%'
	    }
	  },
	  '@media (max-width: 400px)': {
	    backgroundImage: {
	      backgroundSize: '95% 25%',
	      opacity: '0.2'
	    }
	  }
	};
	
	var classes = _components.jss.createStyleSheet(styles).attach().classes;
	
	exports.styles = styles;
	exports.classes = classes;

/***/ }

});
//# sourceMappingURL=1.dashboard.cbab1e5c9a6ebffe2755.js.map