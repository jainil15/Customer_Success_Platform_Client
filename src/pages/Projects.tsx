import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Environments/environment.development";
import useAuthFetch from "../Hooks/useAuthFetch";
import { ProjectRecents } from "../Utils/ProjectItems/ProjectRecents.tsx";
import { ProjectSelection } from "../Utils/ProjectItems/ProjectSelection.tsx";

enum UserRole {
  ADMIN,
  MANAGER,
  AUDITOR,
  CLIENT,
}

export const Projects = () => {
  const { user, isAuthenticated } = useAuth0();
  const {
    data: userProjects,
    error,
    loading,
  } = useAuthFetch(`${baseUrl}/user/projects/${user?.sub}`);
  const update =
    "Resolved issue with user registration form validation. Users were experiencing errors when submitting registration forms with invalid email addresses. Implemented enhanced validation checks to ensure accurate data input and smoother registration process. Users can now register with confidence knowing that their information is securely validated before submission.";
  if (error) return <div>Failed</div>
  if (loading) return <div>Loading...</div>
  return (
    <div className="flex overflow-hidden" >
      <div className="flex flex-col gap-6 w-full">
      <ProjectRecents />
      <ProjectSelection projects={userProjects} />
      </div>
    </div>
  );
};
