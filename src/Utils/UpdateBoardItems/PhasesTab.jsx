import React, { useState } from "react";

const PhasesTab = () => {
  const [phases, setphases] = useState([
    {
      phaseNumber: "One",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      phaseNumber: "One",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      phaseNumber: "One",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      phaseNumber: "One",
      status: "On Time",
      comments: "80% Complete",
    },
  ]);
  return (
    <div className="flex flex-col rounded h-full gap-3 overflow-scroll">
      {phases.map((phase, index) => (
        <div
          key={index}
          className="grid grid-cols-2 bg-gray-100 p-2 rounded gap-8"
          style={{ gridTemplateColumns: "10% auto" }}
        >
          <div className="font-semibold overflow-hidden">
            {phase.phaseNumber}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-green-800">{phase.status}</div>
            <div>{phase.comments}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhasesTab;
