import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Dropdown from "../Utils/Dropdown.jsx";
import Search from "./Search.jsx";
import ProfileIcon from "./ProfileIcon.jsx";
import useAuthFetch from "../Hooks/useAuthFetch.jsx";
import DivLoader from "../Utils/DivLoader.jsx";
import { baseUrl } from "../Environments/environment.development.js";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ sendProjectId }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { data, loading, error } = useAuthFetch(
    `${baseUrl}/user/projects/${user.sub}`
  );

  if (error)
    return (
      <div>
        Failed to load <button onClick={() => logout()}>Logout</button>
      </div>
    );
  if (loading)
    return (
      <nav
        className="flex bg-white p-2 justify-between top-0 w-full"
        style={{ fontFamily: "FigTree" }}
      >
        <Icon />

        <div className="flex gap-5">
          <Search />
          <ProfileIcon />
        </div>
      </nav>
    );
  let projects = [];

  for (let i = 0; i < data.users.projects.length; i++) {
    projects.push({
      label: data.users.projects[i].name,
      value: data.users.projects[i].id,
    });
  }

  return (
    <nav
      className="flex bg-white p-2 justify-between w-full overflow-scroll sticky"
      style={{ fontFamily: "FigTree" }}
    >
      <Icon />
      <div className="flex gap-5">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Login</button>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
        <Dropdown options={projects} sendProjectId={sendProjectId} />
        <Search />
        <ProfileIcon />
      </div>
    </nav>
  );
};

export default Navbar;
