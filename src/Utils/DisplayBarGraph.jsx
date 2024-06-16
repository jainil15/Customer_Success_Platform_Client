import React from "react";

const DisplayBarGraph = ({ percentage }) => {
  return (
    <div>
      <div
        className="relative block rounded-lg"
        style={{
          position: "relative",
          top: "6px",
          width: "100%",
          height: "6px",
          backgroundColor: `rgb(${percentage * 2.55},${
            (100 - percentage) * 2.55
          },0`,
          opacity: "0.3",
          zIndex: "0",
        }}
      ></div>
      <div
        className="relative block rounded-lg"
        style={{
          width: `${percentage}%`,
          height: "6px",
          backgroundColor: `rgb(${percentage * 2.55},${
            (100 - percentage) * 2.55
          },0`,
        }}
      ></div>
    </div>
  );
};

export default DisplayBarGraph;
