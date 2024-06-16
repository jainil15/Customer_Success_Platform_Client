import React, { useEffect, useState } from "react";
import Dropdown from "../../Utils/Dropdown.jsx";
import DropdownJS from "../../Utils/DropdownJS.jsx";
import axios from "axios";
import useAuthFetch from "../../Hooks/useAuthFetch.jsx";
import DivLoader from "../../Utils/DivLoader.jsx";
import { baseUrl } from "../../Environments/environment.development.js";
export enum ProjectStatus {
  INPROGRESS = 0,
  COMPLETED = 1,
  HOLD = 2
}
const ProjectBoard = ({ projectId }) => {
  const { data, error, loading } = useAuthFetch(
    `${baseUrl}/project/${projectId}`
  );
  
  if (error) {
    return <div>Failed To Load</div>;
  }
  if (loading) {
    return (
      <div className="flex flex-col p-4 bg-white rounded overflow-scroll ">
        <h2 className="font-bold text-xl mb-4">
          <DivLoader />
        </h2>
        <div
          className="bg-gray-100 p-4 rounded flex flex-col justify-between gap-4  "
          style={{ lineHeight: "22px" }}
        >
          <div className="overflow-scroll">
            <h4 className="font-bold">Description</h4>
            <DivLoader />
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div
                className=""
                style={{ fontSize: "11px", lineHeight: "10px" }}
              >
                Start Date
              </div>
              <div style={{ fontSize: "13px" }}>16 Apr 2024</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.project) {
    return (
      <div className="flex flex-col p-4 bg-white rounded ">
        <h2 className="font-bold text-xl mb-4">{data.project.name}</h2>
        <div
          className="bg-gray-100 p-4 rounded flex flex-col justify-between gap-4  overflow-scroll"
          style={{ lineHeight: "22px" }}
        >
          <div className="">
            <h4 className="font-bold">Description</h4>
            <p
              className="overflow-scroll"
              style={{ height: "88px", fontSize: "14px" }}
            >
              {data.project.description}
            </p>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div
                className=""
                style={{ fontSize: "11px", lineHeight: "10px" }}
              >
                Start Date
              </div>
              <div style={{ fontSize: "13px" }}>16 Apr 2024</div>
            </div>
            <div className="flex justify-between gap-1 align-middle items-center">
              <div style={{ fontSize: "11px" }}>Status</div>
              <select
                className="bg-green-400 text-green-800 bg-opacity-65 p-1 ps-2 rounded"
                style={{ fontSize: "11px", fontFamily: "inherit" }}
                defaultValue={ProjectStatus[data.project.status]}
                onChange={(e) => {}}
              >
                <option value={1}>In Progress</option>
                <option value={2}>Completed</option>
                <option value={3}>Hold</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectBoard;
