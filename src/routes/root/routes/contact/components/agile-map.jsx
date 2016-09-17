import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import canUseDOM from 'can-use-dom';
import _ from 'lodash';
import { triggerEvent } from 'react-google-maps/lib/utils';
import { useSheet, FlexContainer, Content } from 'components';

const content = {
  address: '62A Ethnikis Antistasis street, Chalandri 152 31 Attika, Greece',
  url: 'https://www.google.com/maps?sll=38.013649,23.788266&q=Ethnikis+Antistasis+62A+Chalandri,' +
       '+Greece&z=9',
};

const style = {
  outerContainer: {
    height: '400px',
  },
  container: {
    width: '100%',
    height: '80%',
    marginBottom: '30px',
    maxWidth: '800px',
    opacity: 0.5,
    ':hover': {
      opacity: 1,
    },
  },
  text: {
    height: '20%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@media (max-width: 1580px)': {
    container: {
      width: '90%',
      marginBottom: '50px',
    },
  },
};

class SimpleMapPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      markers: [
        {
          position: {
            lat: 38.0136492,
            lng: 23.787719,
          },
          key: 'Agile Actors',
          defaultAnimation: 2,
        },
      ],
    };

    this.handleWindowResize = _.throttle(::this.handleWindowResize, 500);
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }

    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }

    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    triggerEvent(this._googleMapComponent, 'resize');
  }

  handleMapClick(event) {
    window.open(content.url);
  }

  render() {
    const _this = this;
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{ height: '100%', width: '100%' }}
            />
        }
        googleMapElement={
          <GoogleMap
            ref={function (map) {
              _this._googleMapComponent = map;
            }
          }
            defaultZoom={16}
            defaultCenter={{ lat: 38.0136492, lng: 23.787719 }}

            >
            <Marker onClick={this.handleMapClick} {...this.state.markers[0]} />
          </GoogleMap>
        }
        />
    );
  }
}

function AgileMap({ sheet }) {
  const { classes } = sheet;
  return (
    <FlexContainer normalContainer column
      className={classes.outerContainer}>
      <div className={classes.container}>
        <SimpleMapPage />
      </div>
      <Content subTitle className={classes.text}>
        {content.address}
      </Content>
    </FlexContainer>
  );
};

AgileMap.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileMap, style);
