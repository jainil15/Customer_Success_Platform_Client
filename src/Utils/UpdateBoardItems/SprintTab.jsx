import React, { useState } from "react";

const SprintTab = () => {
  const [sprints, setSprints] = useState([
    {
      sprintNumber: "232",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      sprintNumber: "Two",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      sprintNumber: "Two",
      status: "On Time",
      comments: "80% Complete",
    },
    {
      sprintNumber: "Two",
      status: "On Time",
      comments: "80% Complete",
    },
  ]);
  return (
    <div className="flex flex-col rounded h-full gap-3 overflow-scroll">
      {sprints.map((sprint, index) => (
        <div
          key={index}
          className="grid grid-cols-2 bg-gray-100 p-2 rounded gap-8"
          style={{ gridTemplateColumns: "10% auto" }}
        >
          <div className="font-semibold overflow-hidden">{sprint.sprintNumber}</div>
          <div className="flex flex-col">
            <div className="font-semibold text-green-800">{sprint.status}</div>
            <div>{sprint.comments}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SprintTab;
