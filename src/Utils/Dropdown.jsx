import React, { useEffect, useState } from "react";

const Dropdown = ({ options, sendProjectId }) => {
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
      className="p-2 px-3 bg-opacity-0 bg-inherit border-b-2 text-left border-gray-300 w-30"
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

export default Dropdown;
