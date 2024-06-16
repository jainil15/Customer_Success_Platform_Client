import React from "react";

const ClientFeedbackItem = ({ header, actionTaken, Description }) => {
  return (
    <div className="bg-gray-100 rounded p-2 px-4">
      <h4 className="font-semibold">{header}</h4>
      <ul className="list-disc list-inside ml-2 text-sm">
        <li className="list-item">Action Taken: {actionTaken ? "Yes" : "No"}</li>

        <li>Description: {Description}</li>
      </ul>
    </div>
  );
};

export default ClientFeedbackItem;
