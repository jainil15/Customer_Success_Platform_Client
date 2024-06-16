import React, { useEffect, useState } from "react";
import { Modal } from "./Modals/Modal.tsx";
import { CreateProject } from "./Modals/Project/CreateProject.tsx";
import { Link, Navigate } from "react-router-dom";
const Sidebar = ({ sendToggleState }) => {
  const [toggle, setToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sendToggleState(toggle);
  }, [toggle]);
  const handleToggleClick = (e) => {
    setToggle(!toggle);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div>
      <button
        className="fixed  z-20 bg-blue-700 text-white opacity-30 rounded-r-3xl"
        onClick={handleToggleClick}
        style={{
          left: toggle ? "239px" : "0",
          height: "15px",
          top: "72px",
          width: "15px",
        }}
      ></button>
      <div
        className={`bg-gray-100 p-2 fixed h-full overflow-auto  border-r-2 border-gray-200 ${
          toggle ? "w-60" : "w-0 hidden"
        }`}
        style={{ top: "4rem" }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-3">
            <Link to={"/home"} className="p-3 bg-white rounded">
              Dashboard
            </Link>
            <Link to={"/projects"} className="p-3 bg-white rounded">
              Projects
            </Link>
            <a className="p-3 bg-white rounded">Setting</a>
            <a className="p-3 bg-white rounded">Flows</a>
          </div>
          <div>
            <button
              className="p-3 bg-white rounded justify-between w-full text-left"
              style={{ marginBottom: "70px" }}
              onClick={handleToggleModal}
            >
              New Project
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <CreateProject closeModal={handleToggleModal} />
      </Modal>
    </div>
  );
};

export default Sidebar;
