import React, { useEffect, useState } from "react";

export const ManagerDropdown = ({ options, sendProjectId }) => {
  useEffect(() => {
    if (options[0]) {
      sendProjectId(options[0].value);
    } else {
      sendProjectId("None")
    }
  }, []);
  const handleSelect = (e) => {
    const selectedOption = e.target.value;
    sendProjectId(selectedOption);
  };

  return (
    <select
      className="p-2 px-3 bg-opacity-0 bg-inherit rounded-md text-left border-gray-400 w-[30rem]"
      style={{borderWidth: "1px "}}
      onChange={handleSelect} 
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};


