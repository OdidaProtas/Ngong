import React from "react";
import Globe from "react-globe.gl";

export default function MyGlobe() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          marginTop: -144,
          alignItems: "center",
          marginLeft: -180,
        }}
      >
        <Globe
          globeImageUrl="https://raw.githubusercontent.com/mayankshah1607/Cle-Air/master/earth-planet-night.jpg"
          backgroundColor="rgb(233, 236, 239)"
          height={700}
          width={700}
        />
      </div>
    </div>
  );
}
