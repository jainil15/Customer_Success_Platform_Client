import React, { useState } from "react";

export const ProjectSingleLayout = ({ component, editComponent }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 rounded-md p-3  mt-2 w-full flex flex-col max-h-[460px]  overflow-scroll">
      <button
        className=" text-xs self-end text-gray-500"
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        {isEdit ? "Back" : "Edit"}
      </button>
      <div className="flex flex-col gap-6 p-3 ">
        {isEdit ? component : editComponent}
      </div>
    </div>
  );
};
