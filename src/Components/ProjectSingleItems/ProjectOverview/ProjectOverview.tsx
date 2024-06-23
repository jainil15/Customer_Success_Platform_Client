import React, { useState } from "react";
import { ProjectStatus } from "../../DashboardItems/ProjectBoard.tsx";
import WideSideArrow from "../../../assets/WideSideArrow.svg";
import { ProjectOverviewEdit } from "./ProjectOverviewEdit.tsx";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../Environments/environment.development.js";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthFetch from "../../../Hooks/useAuthFetch.jsx";
import { toast } from "react-toastify";
import axios from "axios";

export const ProjectOverview = () => {
  const { id: projectId } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { data, loading, error, setData } = useAuthFetch(
    `${baseUrl}/project/details/${projectId}`
  );
  const handleFormSubmit = async (formData: any) => {
    try {
      const token = await getAccessTokenSilently();
      const _projectSubmit = await toast.promise(
        axios.put(`${baseUrl}/project/${projectId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        {
          pending: "Promise is pending",
          success: "Promise resolved 👌",
          error: "Promise rejected 🤯",
        }
      );
      let _project = await axios.get(
        `${baseUrl}/project/details/${projectId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(_project.data);
      setIsEdit(false);
    } catch (e) {}
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Internal Server Error.</div>;
  return (
    <>
    <div className="bg-gray-100 rounded-md p-3 w-full overflow-scroll justify-between mt-2 flex flex-row-reverse max-h-[460px] ">
      <button
        className=" text-xs self-start text-gray-500"
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {!isEdit ? "Edit" : "Back"}
      </button>
      <div className="flex flex-col gap-6 p-3 h-full overflow-scroll">
        
          {!isEdit ? (
            <>
              <div>
                <div className="text-gray-700 text-xs">Project Name</div>
                <h1 className="font-semibold">{data.project.name}</h1>
              </div>
              <div>
                <div className="text-gray-700 text-xs">Description</div>
                <h1 className="font-semibold">{data.project.description}</h1>
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="text-gray-700 text-xs">Start Date</div>
                  <h1 className="font-semibold">
                    {new Date(data.project.startDate).toDateString()}
                  </h1>
                </div>
                <img src={WideSideArrow} alt=">" />
                <div>
                  <div className="text-gray-700 text-xs">End Date</div>
                  <h1 className="font-semibold">
                    {new Date(data.project.endDate).toDateString()}
                  </h1>
                </div>
              </div>
              <div>
                <div className="text-gray-700 text-xs">Project Manager</div>
                <h1 className="font-semibold">{data.project.manager.name}</h1>
              </div>
              <div>
                <div className="text-gray-700 text-xs">Status</div>
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
            </>
          ) : (
            <ProjectOverviewEdit
              handleFormSubmit={handleFormSubmit}
              project={data.project}
              setEdit={setIsEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};
