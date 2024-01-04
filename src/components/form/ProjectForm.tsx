import { useEffect, useState } from "react";
import {
  createProject,
  getProjectByID,
  updateProject,
} from "../../fetch-utils";
import { ProjectFormProps } from "../projects/projects.interface";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";
import PhaseList from "../projects/PhaseList";

export default function ProjectForm({
  projectFormData,
  setProjectFormData,
}: ProjectFormProps) {
  const [clientID, setClientID] = useState<string[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchProjectByID = async () => {
      if (id) {
        const response = await getProjectByID(id);
        setProjectFormData(response);
      }
    };
    handleFetchProjectByID();
  }, []);

  const handleFormChange = (key: string) => (value: string) => {
    setProjectFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderInputs = () => {
    return Object.entries(projectFormData).map(([key, value]) => {
      switch (key) {
        case "name":
          return (
            <TextInput
              key={key}
              label="Name"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "description":
          return (
            <TextInput
              key={key}
              label="Description"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "deposit":
          return (
            <TextInput
              key={key}
              label="Deposit"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "street":
          return (
            <TextInput
              key={key}
              label="Address Line 1"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "city":
          return (
            <TextInput
              key={key}
              label="City"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "state":
          return (
            <TextInput
              key={key}
              label="State"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "zip_code":
          return (
            <TextInput
              key={key}
              label="Zip"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await updateProject(Number(id), projectFormData);
    } else {
      await createProject({ projectFormData, clientID });
    }
    navigate("/project-page");
  };

  return (
    <div className="form-container">
      <div className="project-page-header">
        <h1 className="new-project">{id ? "Edit Project" : "New Project"}</h1>
        <hr />
        <form className="project-form" onSubmit={(e) => handleSubmit(e)}>
          {!id && <SelectInput setClientID={setClientID} />}
          {renderInputs()}
          <PhaseList />
          <button>Save project</button>
        </form>
      </div>
    </div>
  );
}
