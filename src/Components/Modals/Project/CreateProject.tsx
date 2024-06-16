import React, { useEffect, useState } from "react";
import { InputText } from "../../Forms/InputText.tsx";
import useAuthFetch from "../../../Hooks/useAuthFetch.jsx";
import { baseUrl } from "../../../Environments/environment.development.js";
import Dropdown from "../../../Utils/Dropdown.jsx";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
interface User {
  id: string;
  name: string;
}
interface ManagerOption {
  users: User[];
}

export const CreateProject = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    managerId: "",
    projectStackId: 1,
    projectScope: "This is a project Scope and Nothinggggggggg",
    status: "HOLD",
    description: "This a description for this project and Nothinggggggggg More",
    clients: [
      {
        name: "",
        email: "",
      },
    ],
  });
  const {
    data: managers,
    error,
    loading,
  } = useAuthFetch(`${baseUrl}/user/role/MANAGER`);
  const { getAccessTokenSilently } = useAuth0();
  const [managerOptions, setManagerOptions] = useState<ManagerOption[]>();
  useEffect(() => {
    if (managers && managers.users) {
      console.log(managers);
      const options = managers.users.map((manager) => ({
        value: manager.id,
        label: manager.name,
      }));
      setManagerOptions(options);
    }
  }, [managers]);

  const setManagerId = (data) => {
    setFormData((prevData) => ({ ...prevData, managerId: data }));
  };
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData, e.target);
  };
  const handleArrayInput = (e, index: number) => {
    const { name, value } = e.target;
    const clients = formData.clients;
    clients[index] = {
      ...clients[index],
      [name]: value,
    };
    setFormData((prevData) => ({
      ...prevData,
      clients: clients,
    }));
    console.log(formData);
  };
  const handleAddClient = (e) => {
    let clients = formData.clients;
    clients.push({
      name: "",
      email: "",
    });
    setFormData((prevData) => ({ ...prevData, clients: clients }));
  };
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleChangeStep = (input: number) => {
    setCurrentStep(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, managerId, clients } = formData;
    // Validate required fields
    if (!name || !managerId) {
      alert("Please fill out all required fields.");
      return;
    }
    for (const client of clients) {
      if (!client.name || !client.email) {
        alert("Please fill out all client fields.");
        return;
      }
    }
    const token = await getAccessTokenSilently();
    const project = await axios.post(`${baseUrl}/project`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(project);
    closeModal();
  };

  const buttonArray = (
    <div className="flex justify-between items-center mb-2">
      <button
        onClick={() => handleChangeStep(0)}
        className="bg-blue-600 rounded-full w-6 h-6"
      >
        1
      </button>
      <div className="w-1/3  bg-gray-500" style={{ height: "1px" }}></div>
      <button
        onClick={() => handleChangeStep(1)}
        className="bg-blue-600 rounded-full w-6 h-6"
      >
        2
      </button>
      <div className="w-1/3 bg-gray-500" style={{ height: "1px" }}></div>
      <button
        onClick={() => handleChangeStep(2)}
        className="bg-blue-600 rounded-full w-6 h-6"
      >
        3
      </button>
    </div>
  );

  switch (currentStep) {
    case 0:
      return (
        <div>
          {buttonArray}
          <div className="pt-1 overflow-scroll">
            <div className="flex flex-col gap-2 justify-between items-start">
              <InputText
                name="name"
                title={"Project name"}
                placeholder={"Project name"}
                handlleFormInput={handleFormInput}
                currentValue={formData.name}
              />
              <button
                className="p-2 mt-4 bg-blue-600 rounded-md text-white"
                onClick={handleContinue}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="h-full">
          {buttonArray}
          <div className="pt-1">
            <div className="flex flex-col gap-2 justify-between items-start">
              <div className="flex flex-col gap-2 items-start">
                <div
                  className="flex flex-col gap-2 justify-between items-start overflow-scroll"
                  style={{ maxHeight: "25rem" }}
                >
                  {formData.clients.map((client, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 items-start"
                    >
                      <InputText
                        handlleFormInput={(e) => handleArrayInput(e, index)}
                        name={`name`}
                        placeholder={`Client ${index + 1} Name`}
                        title="Client Name"
                        currentValue={client.name}
                      />
                      <InputText
                        handlleFormInput={(e) => handleArrayInput(e, index)}
                        name={`email`}
                        placeholder={`Client ${index + 1} Email`}
                        title="Client Email"
                        currentValue={client.email}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="p-2 mt-4 bg-blue-600 rounded-md text-white"
                  onClick={handleAddClient}
                >
                  ADD CLIENT
                </button>
              </div>
              <button
                className="p-2 mt-4 bg-blue-600 rounded-md text-white"
                onClick={handleContinue}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      );
    case 2:
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      return (
        <div>
          {buttonArray}
          <div className="pt-1">
            <div
              className="flex flex-col gap-2 justify-between items-start"
              style={{ minWidth: "25rem" }}
            >
              <div>Select Manager</div>
              <Dropdown options={managerOptions} sendProjectId={setManagerId} />
              <button
                className="p-2 mt-4 bg-blue-600 rounded-md text-white"
                onClick={(e) => handleSubmit(e)}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      );
  }
};
