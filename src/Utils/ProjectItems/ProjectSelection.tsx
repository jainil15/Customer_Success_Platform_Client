import React, { useEffect, useState } from "react";
import { ProjectTable } from "./ProjectTable.tsx";
import { useAuth0 } from "@auth0/auth0-react";
enum ProjectStatus {
  ALL,
  INPROGRESS,
  COMPLETED,
  HOLD,
}

export const ProjectSelection = ({projects}) => {
  const [toggle, setToggle] = useState<ProjectStatus>(ProjectStatus.ALL);
  const {user} = useAuth0();
  useEffect(()=> {
  })
  return (
    <div className="">
      <div
        className="flex gap-4 py-[5px] mx-2 min-w-[500px]"
        style={{ borderBottom: "1px solid #C5C7D0" }}
      >
        <div className="">
          <div
            className={`${
              toggle === ProjectStatus.ALL
                ? "border-b-2 border-blue-600 scale-x-100"
                : "scale-x-0"
            } relative w-full block h-full transition-transform duration-300 ease-in-out`}
            style={{
              position: "relative",
              top: "6px",
            }}
          ></div>
          <div
            className="cursor-pointer px-3"
            style={{ position: "relative", top: "-22.5px" }}
            onClick={(e) => setToggle(ProjectStatus.ALL)}
          >
            All Projects
          </div>
        </div>
        <div>
          <div
            className={`${
              toggle === ProjectStatus.INPROGRESS
                ? "border-b-2 border-blue-600 scale-x-100"
                : "scale-x-0"
            } relative w-full block h-full transition-transform duration-300 ease-in-out`}
            style={{
              position: "relative",
              top: "6px",
            }}
          ></div>
          <div
            className="cursor-pointer px-3"
            style={{ position: "relative", top: "-22.5px" }}
            onClick={(e) => setToggle(ProjectStatus.INPROGRESS)}
          >
            In Progress
          </div>
        </div>
        <div>
          <div
            className={`${
              toggle === ProjectStatus.COMPLETED
                ? "border-b-2 border-blue-600 scale-x-100"
                : "scale-x-0"
            } relative w-full block h-full transition-transform duration-300 ease-in-out`}
            style={{
              position: "relative",
              top: "6px",
            }}
          ></div>
          <div
            className="cursor-pointer px-3"
            style={{ position: "relative", top: "-22.5px" }}
            onClick={(e) => setToggle(ProjectStatus.COMPLETED)}
          >
            Completed
          </div>
        </div>
        <div>
          <div
            className={`${
              toggle === ProjectStatus.HOLD
                ? "border-b-2 border-blue-600 scale-x-100"
                : "scale-x-0"
            } relative w-full block h-full transition-transform duration-300 ease-in-out`}
            style={{
              position: "relative",
              top: "6px",
            }}
          ></div>
          <div
            className="cursor-pointer px-3"
            style={{ position: "relative", top: "-22.5px" }}
            onClick={(e) => setToggle(ProjectStatus.HOLD)}
          >
            Hold
          </div>
        </div>
      </div>
      <div>
        <ProjectTable projects={projects} />
      </div>
    </div>
  );
};
