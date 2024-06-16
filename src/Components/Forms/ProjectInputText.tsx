import React from "react";

export const ProjectInputText = ({ name, title,currentValue, required, handleFormInput }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-700">{title}{required && "*"}</span>
      <input
        onChange={(e) => handleFormInput(e)}
        className="border-solid border-gray-400 outline-none p-2 rounded-md "
        style={{ borderWidth: "1px", width: "20rem" }}
        type="text"
        required={true}
        name={name}
        value={currentValue}
      ></input>
    </div>
  );
};
