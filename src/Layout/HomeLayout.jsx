import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import {
  HomeLayoutProvider,
  useHomeLayout,
} from "../Context/HomeLayoutProvider.tsx";
import { LoadingPage } from "../Components/LoadingPage.tsx";

export const HomeLayout = () => {
  const { toggle, selectedProjectId, setProjectFromChild, setToggleState } =
    useHomeLayout();
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isAuthenticated && !isLoading) return <Navigate to="/login" />;
  if (isLoading) return <LoadingPage />
  return (
    <>
      <Navbar sendProjectId={setProjectFromChild} />
      <Sidebar sendToggleState={setToggleState} />
      <div
        className="p-2"
        style={{ marginLeft: toggle ? "250px" : "15px", marginTop: "64px" }}
      >
        <Outlet />
      </div>
    </>
  );
};
