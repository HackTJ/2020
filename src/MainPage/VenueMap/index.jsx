import React, { Component } from "react";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import assign from "lodash/assign";
import debounce from "lodash/debounce";

import "./index.css";

class VenueMap extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 385,
      latitude: 38.92201,
      longitude: -77.23312,
      zoom: 16
    }
  };

  componentDidMount() {
    // Automatically resizes the map when size is changed horizontally.
    window.addEventListener(
      "resize",
      debounce(
        function onResize() {
          this.setState({
            viewport: assign({}, this.state.viewport, {
              width: window.innerWidth
            })
          });
        }.bind(this)
      ),
      100
    );
  }

  render() {
    return (
      <>
        <a className="anchor" id="map">
          Map
        </a>
        <section className="green map">
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoidmFydW4xNDcwIiwiYSI6ImNqc2FzcTg0dDAxeDc0NG9hdnl2ZW96ajAifQ.tm0RFQRooHhcpOKw9lL_9g"
            }
            mapStyle={"mapbox://styles/varun1470/cjsaupmju0by11fpkprq5prse"}
            onViewportChange={viewport => this.setState({ viewport })}
          >
            <Marker latitude={38.92201} longitude={-77.23312}>
              <h3
                style={{
                  color: "#64D861"
                }}
              >
                Cvent
              </h3>
            </Marker>
          </ReactMapGL>
          <div
            className="info-circle"
            id="map-info"
            style={{
              transform: "matrix(1, 0, 0, 1, 0, 0)"
            }}
          >
            <div className="info-container">
              <h6>Cvent</h6>
              <div className="address">1765 Greensboro Station Pl</div>
              <div className="address">McLean, VA</div>
              <a
                className="button small"
                style={{ width: "60%" }}
                href="https://www.google.com/maps/dir//Cvent+HQ,+1765+Greensboro+Station+Pl,+McLean,+VA+22102/@38.9229121,-77.3033695,12z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text">Get Directions</div>
                <div className="icon icon-caret-right"></div>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default VenueMap;
