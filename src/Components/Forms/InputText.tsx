import React, { useState } from "react";

export const InputText = ({ name, title,currentValue, placeholder, handlleFormInput, validity }) => {
  
  
  return (
    <div className="flex flex-col gap-1">
      {`${title}*`}
      <input
        onChange={(e) => handlleFormInput(e)}
        className={` rounded-md  outline-none p-2  ${!validity ? ' border-4 border-solid border-red-600' : 'border-solid border-gray-400'}`}
        style={{ borderWidth: "1px", width: "30rem" }}
        type="text"
        placeholder={placeholder}
        name={name}
        value={currentValue}
      ></input>
    </div>
  );
};
