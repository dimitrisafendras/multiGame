import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import canUseDOM from 'can-use-dom';
import _ from 'lodash';
import { triggerEvent } from 'react-google-maps/lib/utils';
import { useSheet, FlexContainer, Content } from 'components';
import { style } from './style';
import { content } from './content';

class SimpleMapPage extends React.Component {
  // TODO Update callbalck for resize event listener
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

    // this.handleWindowResize = _.throttle(::this.handleWindowResize, 500);
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }

    // window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }

    // window.removeEventListener('resize', this.handleWindowResize);
  }

  // handleWindowResize() {
  //  triggerEvent(this._googleMapComponent, 'resize');
  // }

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
            defaultCenter={{ lat: 38.0136492, lng: 23.787719 }}>
            <Marker onClick={this.handleMapClick} {...this.state.markers[0]} />
          </GoogleMap>
        }
      />
    );
  }
}

function AgileActorsMap({ sheet }) {
  const { classes } = sheet;
  return (
    <FlexContainer largeContainer
                   className={classes.outerContainer}>
      <SimpleMapPage />
    </FlexContainer>
  );
};

AgileActorsMap.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsMap, style);
