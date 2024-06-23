import React from "react";

export const FormModalLayout = ({
  children,
  handleChangeStep,
  steps,
  currentStep,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`border-white bg-white my-2 flex items-center gap-3  z-20 ${
              index === 0 && "pr-4"
            } ${index === steps.length - 1 && "pl-4"} ${
              index < steps.length - 1 && index > 0 && "px-4"
            }`}
          >
            <button
              onClick={() => handleChangeStep(index)}
              className={` rounded-full w-6 h-6 ${
                currentStep === index
                  ? "outline-1 outline-blue-700 text-white outline outline-offset-2 bg-blue-600"
                  : "bg-gray-200 text-black outline-1 outline outline-gray-400"
              }`}
            >
              {index + 1}
            </button>
            <span className="text-sm">{step}</span>
            {/* <div className="w-8 h-8 bg-white  relative -top-[28px] right-[4px] border-2 border-blue-600 rounded-full bg-opacity-0 -z-20"></div> */}
          </div>
        ))}
      </div>
      <div
        className={` bg-gray-500 relative`}
        style={{ height: "1px", width: `${100}%`, top: "-21px" }}
      ></div>
      {children}
    </>
  );
};
