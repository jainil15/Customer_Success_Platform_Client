import React from "react";
import backstroke from "../assets/BackStroke.svg";
import DropdownJS from "../Utils/DropdownJS";
const Dropdown = () => {
  return (
    <div className="flex justify-center items-center border-b-2 gap-2 p-2">
      <div className="" style={{}}>
        Sentra.World
      </div>
      <div className="">
        <img src={backstroke} style={{ scale: "" }} alt="backstroke"></img>
      </div>
    </div>
  );
};

export default Dropdown;
