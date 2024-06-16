import React from "react";
import { ProjectStatus } from "../DashboardItems/ProjectBoard.tsx";
import WideSideArrow from "../../assets/WideSideArrow.svg"

export const ProjectOverview = ({ project }) => {
  return (
    <div className="flex flex-col gap-6 p-3">
      <div>
        <div className="text-gray-700 text-xs">Project Name</div>
        <h1 className="font-semibold">{project.name}</h1>
      </div>
      <div>
        <div className="text-gray-700 text-xs">Description</div>
        <h1 className="font-semibold">{project.description}</h1>
      </div>
      <div className="flex gap-5">
        <div>
          <div className="text-gray-700 text-xs">Start Date</div>
          <h1 className="font-semibold">
            {new Date(project.startDate).toDateString()}
          </h1>
        </div>
        <img src={WideSideArrow} alt=">" />
        <div>
          <div className="text-gray-700 text-xs">End Date</div>
          <h1 className="font-semibold">
            {new Date(project.endDate).toDateString()}
          </h1>
        </div>
      </div>
      <div>
        <div className="text-gray-700 text-xs">Project Manager</div>
        <h1 className="font-semibold">{project.manager.name}</h1>
      </div>
      <div>
        <div className="text-gray-700 text-xs">Status</div>
        <select
          className="bg-green-400 text-green-800 bg-opacity-65 p-1 ps-2 rounded"
          style={{ fontSize: "11px", fontFamily: "inherit" }}
          defaultValue={ProjectStatus[project.status]}
          onChange={(e) => {}}
        >
          <option value={1}>In Progress</option>
          <option value={2}>Completed</option>
          <option value={3}>Hold</option>
        </select>
      </div>
    </div>
  );
};
