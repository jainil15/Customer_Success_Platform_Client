import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Environments/environment.development";
import useAuthFetch from "../Hooks/useAuthFetch";
import { ProjectRecents } from "../Utils/ProjectItems/ProjectRecents.tsx";
import { ProjectSelection } from "../Utils/ProjectItems/ProjectSelection.tsx";

export const Projects = () => {
  const { user } = useAuth0();
  const {
    data: userProjects,
    error,
    loading,
  } = useAuthFetch(`${baseUrl}/user/projects/${user?.sub}`);
  if (error) return <div>Failed</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="flex flex-col gap-6 w-full h-full overflow-scroll ">
        <ProjectRecents />
        <ProjectSelection projects={userProjects} />
      </div>
    </>
  );
};
