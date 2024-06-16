import React from "react";

export const ProjectRecents = () => {
  const update =
    "Resolved issue with user registration form validation. Users were experiencing errors when submitting registration forms with invalid email addresses. Implemented enhanced validation checks to ensure accurate data input and smoother registration process. Users can now register with confidence knowing that their information is securely validated before submission.";

  return (
    <div className="flex flex-col bg-white p-4 rounded-sm gap-2">
      <div className="text text-lg" style={{ fontWeight: "bold" }}>
        Recent Updates
      </div>
      <div className="text-[16px]">{update}</div>
      <div className="text-xs text-gray-600">
        {"KMPG "}/{" In Progress"}
      </div>
      <div>
        <button className="text-sm px-3 py-[0.2rem] bg-blue-600 text-white rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};
