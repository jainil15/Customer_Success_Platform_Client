import React from "react";
import Sidebar from "./Sidebar";
import ProjectBoard from "./DashboardItems/ProjectBoard.tsx";
import RiskBoard from "./DashboardItems/RiskBoard";
import UpdatesBoard from "./DashboardItems/UpdatesBoard";
import LogsBoard from "./DashboardItems/LogsBoard";
import ClientFeedbackBoard from "./DashboardItems/ClientFeedbackBoard";

const Dashboard = ({ projectId }) => {
  return (
    <div className="flex">
      <div
        className=" bg-gray-100 grid w-full grid-rows-2 grid-cols-3 gap-4 overflow-scroll dashboard-grid"
        style={{
          height: "88.5vh",
          
        }}
      >
        <ProjectBoard projectId={projectId} />

        <RiskBoard />

        <UpdatesBoard />

        <LogsBoard />

        <div className="dashboard-client-feedback">
          <ClientFeedbackBoard />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
