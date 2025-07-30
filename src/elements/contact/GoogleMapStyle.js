import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 6.42,
      lng: 3.46
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      // <div className="google-map-style-1">
      //   <GoogleMapReact
      //     // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     {/* 6.427942807469362, 3.468065994541031 */}
      //     <AnyReactComponent
      //       lat={6.427958805977097}
      //       lng={3.4680445423273025}   
      //       text="The Bolajoko"
      //     />
      //   </GoogleMapReact>
      // </div>
      <div className="google-map-style-1" style={{ height: '400px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7369122098085!2d3.4680659999999994!3d6.427836199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5b5f18e1b47%3A0x4863dbff8ce9dd34!2sThe%20Bolajoko!5e0!3m2!1sen!2sng!4v1753882524139!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;