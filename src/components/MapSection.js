import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./MapSection.css";
import torontImage from '../assets/toronto.png'; 


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Section Headings */}
        <h4 className="map-subtitle">STATES WE</h4>
        <h2 className="map-title">Currently Serve</h2>

        {/* Intro Paragraph */}
        <p className="map-description">
          We believe everyone should have access to treatment and care. That’s why
          we’re teaming up with providers all over the country. Click on a green
          state to see the treatment programs we currently accept and to learn more
          about online Suboxone doctors in your area.
        </p>

        <div className="map-content">
          <div className="map-left">
            <img
              src={torontImage}
              alt="Toronto Skyline"
              className="toronto-image"
            />
            <div className="city-info">
              <h3>Toronto</h3>
              <ul>
                <li>
                  <a href="#!">Ottawa St. and Homer / Wextron Blvd.</a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive US Map */}
          <div className="map-right">
            <ComposableMap
              projection="geoAlbersUsa"
              projectionConfig={{ scale: 1000 }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.name;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        stroke="#fff"
                        strokeWidth={0.5}
                        style={{
                          default: {
                            fill: "#55cfa2",
                            outline: "none",
                          },
                          hover: {
                            fill:
                              stateName === "Texas" ||
                              stateName === "Colorado" ||
                              stateName === "Montana"
                                ? "orange"
                                : "#55cfa2",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#55cfa2",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
