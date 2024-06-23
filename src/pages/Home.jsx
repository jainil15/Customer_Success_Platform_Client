import React, { useEffect, useState } from "react";
import Icon from "../Components/Icon";
import Dropdown from "../Components/Dropdown";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import { useHomeLayout } from "../Context/HomeLayoutProvider.tsx";

export const Home = () => {
  const { selectedProjectId } = useHomeLayout();
  const { getAccessTokenSilently, isAuthenticated, isLoading, user } =
    useAuth0();
  //to do change this ->
  return (
    <>
      <Dashboard projectId={selectedProjectId} />
    </>
  );
};
