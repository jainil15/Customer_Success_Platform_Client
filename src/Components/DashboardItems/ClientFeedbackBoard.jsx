import React from "react";
import DropdownJS from "../../Utils/DropdownJS";
import ClientFeedbackItem from "../../Utils/ClientFeedbackItem";

const ClientFeedbackBoard = () => {
  const clientFeedback = [
    {
      header: "Complaint",
      actionTaken: true,
      Description:
        "Client complained about the delay in the delivery of the project",
    },
    {
      header: "Complaint",
      actionTaken: true,
      Description:
        "Client complained about the delay in the delivery of the project",
    },
    {
      header: "Complaint",
      actionTaken: true,
      Description:
        "Client complained about the delay in the delivery of the project",
    },
    {
      header: "Complaint",
      actionTaken: true,
      Description:
        "Client complained about the delay in the delivery of the project",
    },
    {
      header: "Complaint",
      actionTaken: true,
      Description:
        "Client complained about the delay in the delivery of the project",
    },
  ];
  return (
    <div className="flex flex-col p-4 bg-white rounded h-full ">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-xl">Client Feedback</h2>
        <button className="">View All</button>
      </div>
      <section className="flex flex-col gap-2 overflow-scroll h-full">
        {clientFeedback.map((feedback, index) => (
          <ClientFeedbackItem
            key={index}
            header={feedback.header}
            actionTaken={feedback.actionTaken}
            Description={feedback.Description}
          />
        ))}
      </section>
    </div>
  );
};

export default ClientFeedbackBoard;
