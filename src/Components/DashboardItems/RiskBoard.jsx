import React, { useEffect, useState } from "react";
import DisplayBarGraph from "../../Utils/DisplayBarGraph";

const RiskBoard = () => {
  const [risks, setRisks] = useState([
    {
      category: "Financial",
      percentage: 80,
      status: "High Risk",
    },
    {
      category: "Operational",
      percentage: 60,
      status: "Medium Risk",
    },
    {
      category: "Technical",
      percentage: 40,
      status: "Low Risk",
    },
    {
      category: "Financial",
      percentage: 80,
      status: "High Risk",
    },
  ]);

  return (
    <div className="flex flex-col p-4 bg-white rounded">
      <h2 className="font-bold text-xl mb-4">Risk</h2>
      <div className="flex flex-col justify-evenly gap-2 align-middle h-full overflow-scroll">
        {risks.map((risk, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm">
              <h4 className="font-bold">{risk.category}</h4>
              <div>{risk.status}</div>
            </div>
            <DisplayBarGraph key={index} percentage={risk.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskBoard;
