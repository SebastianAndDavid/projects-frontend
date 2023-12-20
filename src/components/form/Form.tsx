import { useState } from "react";
import NameInput from "./NameInput";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  console.log("formData", formData);
  const handleFormChange = (key: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderInputs = () => {
    return Object.entries(formData).map(([key, value]) => {
      switch (key) {
        case "name":
          return (
            <NameInput
              key={key}
              label="Name"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
      }
    });
  };

  return (
    <form>
      {renderInputs()}
      <input />
      <button>Submit</button>
    </form>
  );
}
