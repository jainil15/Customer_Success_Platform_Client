import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuthFetch from "../Hooks/useAuthFetch";
import { baseUrl } from "../Environments/environment.development";
import SideStroke from "../assets/SideStroke.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { ProjectSidebar } from "../Components/ProjectSingleItems/ProjectSidebar.tsx";
import { ProjectStatus } from "../Components/DashboardItems/ProjectBoard.tsx";
import { ProjectOverview } from "../Components/ProjectSingleItems/ProjectOverview/ProjectOverview.tsx";

import { ProjectOverviewEdit } from "../Components/ProjectSingleItems/ProjectOverview/ProjectOverviewEdit.tsx";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { ProjectAudit } from "../Components/ProjectSingleItems/ProjectAudit/ProjectAudit.tsx";
import { ProjectAuditEdit } from "../Components/ProjectSingleItems/ProjectAudit/ProjectAuditEdit.tsx";
export enum ProjectDetail {
  PROJECT_OVERVIEW,
  AUDIT,
  VERSION_HISTORY,
  STAKEHOLDERS,
  MILESTONES,
  SPRINTS,
  TIMELINE,
  MOM_OF_MEETINGS,
  RESOURCES,
  CLIENT_FEEDBACKS,
}
export const ProjectSingle = () => {
  const { id: projectId } = useParams();
  const { data, loading, error, setData } = useAuthFetch(
    `${baseUrl}/project/details/${projectId}`
  );

  const [currentDetail, setCurrentDetail] = useState<ProjectDetail>(
    ProjectDetail.PROJECT_OVERVIEW
  );
  const handleChangeDetail = (detail: ProjectDetail) => {
    setCurrentDetail(detail);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Internal Server Error.</div>;
  return (
    <>
      <div className=" bg-white rounded-sm h-full">
        <div className=" p-4 w-full mr-5  h-full flex flex-col">
          <div className="flex gap-1 text-xs">
            <Link to={"/projects"} className="text-gray-500">
              Projects
            </Link>
            <img src={SideStroke} alt={">"} />
            {data.project.name}
            <img src={SideStroke} alt={">"} />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="my-5 mt-8 text-xl font-semibold">
              {data.project.name}
            </h1>
            <div className="text-sm flex items-center gap-2">
              <span>Members</span>
              <div className=" bg-gray-300 px-4 py-[0.24rem] rounded-full border-white border-2">
                {data.project.clients.length + data.project.auditors.length}
              </div>
              <button className="flex border-2 text-sm px-2 py-[0.3rem]  text-gray-800 rounded-md">
                <img src={ProfileIcon} alt="" />
                Invite members
              </button>
            </div>
          </div>
          <hr style={{ borderWidth: "1px" }} />

          <div className="flex mt-2  gap-11 h-[80%]">
            <ProjectSidebar
              handleChangeDetail={handleChangeDetail}
              currentDetail={currentDetail}
            />

            {(() => {
              switch (currentDetail) {
                case ProjectDetail.PROJECT_OVERVIEW:
                  return <ProjectOverview />;
                case ProjectDetail.AUDIT:
                  return <ProjectAudit />;
                default:
                  return <ProjectOverview />;
              }
            })()}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
