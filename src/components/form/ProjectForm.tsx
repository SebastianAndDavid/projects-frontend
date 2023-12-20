import { ProjectFormProps } from "../projects/projects.interface";
import TextInput from "./TextInput";

export default function ProjectForm({
  projectFormData,
  setProjectFormData,
}: ProjectFormProps) {
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

  return (
    <div>
      <form>
        {renderInputs()}
        <button>Submit</button>
      </form>
    </div>
  );
}
