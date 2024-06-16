import React, { useState } from "react";
import { LogItems } from "./LogItems.tsx";

const LogsBoard = () => {
  const [logs, setLogs] = useState([]);
  return (
    <div className="flex flex-col p-4 bg-white rounded">
      <div className="flex justify-between  mb-4">
        <h2 className="font-bold text-xl">Logs</h2>
        <button className="">View All</button>
      </div>
      <div className="w-full h-full flex flex-col gap-4 overflow-scroll">
        <LogItems
          date="2024-04-20 10:00 AM"
          body="Completed Phase 1 ahead of schedule."
        />
        <LogItems
          date="2024-04-20 10:00 AM"
          body="Completed Phase 1 ahead of schedule."
        />
        <LogItems
          date="2024-04-20 10:00 AM"
          body="Completed Phase 1 ahead of schedule."
        />
        <LogItems
          date="2024-04-20 10:00 AM"
          body="Completed Phase 1 ahead of schedule."
        />
      </div>
    </div>
  );
};

export default LogsBoard;
