import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuthFetch from "../Hooks/useAuthFetch";
import { baseUrl } from "../Environments/environment.development";
import SideStroke from "../assets/SideStroke.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { ProjectSidebar } from "../Components/ProjectSingleItems/ProjectSidebar.tsx";
import { ProjectStatus } from "../Components/DashboardItems/ProjectBoard.tsx";
import { ProjectOverview } from "../Components/ProjectSingleItems/ProjectOverview.tsx";
import { ProjectBudget } from "../Components/ProjectSingleItems/ProjectBudget.tsx";
import { ProjectOverviewEdit } from "../Components/ProjectSingleItems/Edit/ProjectOverviewEdit.tsx";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
export enum ProjectDetail {
  PROJECT_OVERVIEW,
  BUDGET,
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
  const { getAccessTokenSilently } = useAuth0();
  const [currentDetail, setCurrentDetail] = useState<ProjectDetail>(
    ProjectDetail.PROJECT_OVERVIEW
  );
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleChangeDetail = (detail: ProjectDetail) => {
    setCurrentDetail(detail);
  };
  const handleFormSubmit = async (formData: any) => {
    try {
      const token = await getAccessTokenSilently();
      const projectSubmit = await axios.put(
        `${baseUrl}/project/${projectId}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      let _project = await axios.get(
        `${baseUrl}/project/details/${projectId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(_project.data);
      setIsEdit(false);
    } catch (e) {}
  };
  if (error) return <div>Failed...</div>;
  if (loading) return <div>Loading...</div>;
  if (data)
    return (
      <div className="overflow-hidden bg-white rounded-sm">
        <div className=" p-4  h-[88vh] mr-5">
          <div>
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
          </div>
          <div className="flex mt-2  gap-11">
            <ProjectSidebar
              handleChangeDetail={handleChangeDetail}
              currentDetail={currentDetail}
            />

            <div className="bg-gray-100 rounded-md p-3  mt-2 w-full flex flex-col max-h-[460px] overflow-scroll">
              <button
                className="fixed text-xs self-end text-gray-500"
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                {isEdit ? "Back" : "Edit"}
              </button>
              {(() => {
                switch (currentDetail) {
                  case ProjectDetail.PROJECT_OVERVIEW:
                    return isEdit ? (
                      <ProjectOverviewEdit
                        project={data.project}
                        setEdit={setIsEdit}
                        handleFormSubmit={handleFormSubmit}
                      />
                    ) : (
                      <ProjectOverview project={data.project} />
                    );
                  case ProjectDetail.BUDGET:
                    return <ProjectBudget />;
                  default:
                    return <ProjectOverview project={data.project} />;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    );
};
