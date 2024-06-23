import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../Environments/environment.development.js";
import useAuthFetch from "../../../Hooks/useAuthFetch.jsx";
import { ProjectInputText } from "../../Forms/ProjectInputText.tsx";
import Dropdown from "../../Dropdown.jsx";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const ProjectOverviewEdit = ({ project, setEdit, handleFormSubmit }) => {
  const {
    data: managers,
    error,
    loading,
  } = useAuthFetch(`${baseUrl}/user/role/MANAGER`);

  const [formData, setFormData] = useState(project);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (error) return <div>Request Failed</div>;
  if (loading) return <div></div>;
  return (
    <>
      <ProjectInputText
        name="name"
        currentValue={formData.name}
        handleFormInput={handleFormInput}
        title={"Project Name"}
        required={true}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-700">Project Description</span>
        <textarea
          name="description"
          rows={3}
          className="border-solid border-gray-400 outline-none p-2 rounded-md border-[1px]"
          onChange={(e) => handleFormInput(e)}
          value={formData.description}
        />
      </div>
      <div className="flex  gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Start Date</span>
          <input
            name="startDate"
            type="date"
            value={new Date(formData.startDate).toISOString().substring(0, 10)}
            className="border-solid border-gray-400 outline-none p-3 rounded-md w-60 border-[1px]"
            onChange={handleFormInput}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">End Date</span>
          <input
            name="endDate"
            type="date"
            value={new Date(formData.endDate).toISOString().substring(0, 10)}
            className="border-solid border-gray-400 outline-none p-3 rounded-md w-60 border-[1px]"
            onChange={handleFormInput}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Project Manager</span>
          <select
            defaultValue={project.managerId}
            name="managerId"
            className="border-solid border-gray-400 outline-none p-[14.5px] rounded-md w-60 bg-white border-[1px]"
            onChange={handleFormInput}
          >
            {managers.users.map((manager, index) => (
              <option value={manager.id}>{manager.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={(e) => handleFormSubmit(formData)}
        className="w-20 bg-blue-600 p-2 text-white rounded-md"
      >
        Save
      </button>
    </>
  );
};
