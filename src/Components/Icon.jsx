import React from "react";

const Icon = () => {
  return (
    <div className="flex gap-2">
      <div
        className="w-12 h-12 bg-blue-600 rounded-lg text-white text-xl font-bold"
        style={{
          display: "table",
          verticalAlign: "bottom",
          fontFamily: "Figtree",
        }}
      >
        <div
          style={{
            display: "table-cell",
            verticalAlign: "bottom",
            marginTop: "20px",
            textAlign: "center",
            paddingRight: "4px",
          }}
        >
          CSP
        </div>
      </div>
      <div className="flex flex-col gap-0 justify-center align-middle ">
        <div
          className="font-bold text-blue-600"
          style={{
            fontSize: "14px",
            fontFamily: "Figtree",
            lineHeight: "14px",
          }}
        >
          CUSTOMER
        </div>
        <div
          className="font-bold text-black"
          style={{
            fontSize: "14px",
            fontFamily: "Figtree",
            lineHeight: "14px",
          }}
        >
          SUPPORT
        </div>
        <div
          className="font-thin text-gray-400 spacin"
          style={{
            letterSpacing: "3px",
            fontSize: "10.5px",
            fontFamily: "Figtree",
            lineHeight: "16px",
            
          }}
        >
          PLATFORM
        </div>
      </div>
    </div>
  );
};

export default Icon;
