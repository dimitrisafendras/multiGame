import React from 'react';

const Resizable = (ResizableComponent) => class extends React.Component {
  state: {
    tablet: boolean,
    mobile: boolean,
  };

  constructor(props) {
    super(props);
    this.state = {
      tablet: window.matchMedia('(max-width: 1581px)').matches,
      mobile: window.matchMedia('(max-width: 767px)').matches,
    };
  }

  // Debounce window resize event for performance
  updateDimensions() {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(() => {
      // Resize finished
      if (this.mounted) { // Check if component unmounted in the meantime
        const tablet = window.matchMedia('(max-width: 1581px)').matches;
        const mobile = window.matchMedia('(max-width: 767px)').matches;

        (tablet !== this.state.tablet) && this.setState({ tablet });
        (mobile !== this.state.mobile) && this.setState({ mobile });
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
