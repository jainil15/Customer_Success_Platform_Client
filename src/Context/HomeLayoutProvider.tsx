import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

interface HomeLayoutContextProps {
  selectedProjectId: string;
  toggle: boolean;
  setProjectFromChild: (data: string) => void;
  setToggleState: (data: boolean) => void;
}
const HomeLayoutContext = createContext<HomeLayoutContextProps | undefined>(undefined);

export const HomeLayoutProvider = ({children}) => {
  const [selectedProjectId, setSelectedProjectId] = useState("");

  const [toggle, setToggle] = useState(true);
  

  const setProjectFromChild = (data) => {
    setSelectedProjectId(data);
  };
  const setToggleState = (data) => {
    setToggle(data);
  };
  return (
    <HomeLayoutContext.Provider
      value={{
        selectedProjectId,
        toggle,
        setProjectFromChild,
        setToggleState,
        
      }}
    >
      {children}
    </HomeLayoutContext.Provider>
  );
};

export const useHomeLayout = () => {
  const context = useContext(HomeLayoutContext);
  if (!context) {
    throw new Error('useHomeLayout must be used within a HomeLayoutProvider');
  }
  return context;
};
