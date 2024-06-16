import React from "react";

export const InputText = ({ name, title,currentValue, placeholder, handlleFormInput }) => {
  return (
    <div className="flex flex-col gap-1">
      {title}
      <input
        onChange={(e) => handlleFormInput(e)}
        className="border-solid border-black outline-none p-2  focus:shadow-md rounded-sm border-opacity-50"
        style={{ borderWidth: "1px", width: "30rem" }}
        type="text"
        placeholder={placeholder}
        name={name}
        value={currentValue}
      ></input>
    </div>
  );
};
