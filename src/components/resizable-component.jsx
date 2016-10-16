import React from 'react';

const Resizable = ResizableComponent => class extends React.Component {
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
  render() {
    return <ResizableComponent {...this.props} size={this.state} />;
  }
};

export default Resizable;