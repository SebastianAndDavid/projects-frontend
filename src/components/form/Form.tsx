import TextInput from "./TextInput";

interface FormProps {
  formData: {
    name: string;
    description: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
    }>
  >;
}

export default function Form({ formData, setFormData }: FormProps) {
  const handleFormChange = (key: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log("formData", formData);
  const renderInputs = () => {
    return Object.entries(formData).map(([key, value]) => {
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
