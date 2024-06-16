import React, { useState } from "react";
import SprintTab from "../../Utils/UpdateBoardItems/SprintTab.jsx";
import PhasesTab from "../../Utils/UpdateBoardItems/PhasesTab.jsx";
const UpdatesBoard = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-col p-4 bg-white rounded ">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-xl ">Updates</h2>
        <div
          className="flex gap-2"
          style={{ borderBottom: "1px solid #f3f4f6" }}
        >
          <div>
            <div
              className={`${
                toggle ? "border-b-2 border-blue-600 scale-x-100" : "scale-x-0"
              } relative w-full block h-full transition-transform duration-300 ease-in-out`}
              style={{
                position: "relative",
                top: "1px",
              }}
            ></div>
            <a
              className="cursor-pointer"
              style={{ position: "relative", top: "-22.5px" }}
              onClick={(e) => setToggle(true)}
            >
              Phases
            </a>
          </div>
          <div>
            <div
              className={`${
                toggle
                  ? "border-0 scale-x-0"
                  : "border-b-2 border-blue-600 scale-x-100"
              } relative w-full block h-full transition-transform duration-300 ease-in-out`}
              style={{
                position: "relative",
                top: "1px",
              }}
            ></div>
            <a
              className="cursor-pointer"
              style={{ position: "relative", top: "-22.5px" }}
              onClick={(e) => setToggle(false)}
            >
              Sprints
            </a>
          </div>
        </div>
      </div>
      {toggle ? <PhasesTab /> : <SprintTab /> }
    </div>
  );
};

export default UpdatesBoard;
