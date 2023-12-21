import { useState } from "react";
import { createProject } from "../../fetch-utils";
import { ProjectFormProps } from "../projects/projects.interface";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import "./Form.css";

export default function ProjectForm({
  projectFormData,
  setProjectFormData,
}: ProjectFormProps) {
  const [clientID, setClientID] = useState<string[]>([]);

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
    await createProject({ projectFormData, clientID });
  };

  return (
    <div className="form-container">
      <div className="project-page-header">
        <h1 className="new-project">New project</h1>
        <hr />
        <form className="project-form" onSubmit={(e) => handleSubmit(e)}>
          <SelectInput setClientID={setClientID} />
          {renderInputs()}
          <button>Save project</button>
        </form>
      </div>
    </div>
  );
}
