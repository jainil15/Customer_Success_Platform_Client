import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuthFetch from "../../../Hooks/useAuthFetch";
import { baseUrl } from "../../../Environments/environment.development";
import { Modal } from "../../Modals/Modal.tsx";

export const ProjectAudit = () => {
  const { id: projectId } = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, loading, error, setData } = useAuthFetch(
    `${baseUrl}/project/details/${projectId}`
  );
  return (
    <>
      <div className="bg-gray-100 rounded-md p-3 w-full overflow-scroll mt-2  max-h-[460px] ">
        <button onClick={() => setIsEdit(!isEdit)}>Add</button>
      </div>

      <Modal
        isOpen={isEdit}
        onClose={() => setIsEdit(!isEdit)}
        title={"Create Audit"}
      >
        <h1>Hello</h1>
      </Modal>
    </>
  );
};
