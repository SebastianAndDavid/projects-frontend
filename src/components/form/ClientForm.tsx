import { ClientFormProps } from "../homeowners/homeowner.interface";
import TextInput from "./TextInput";

export default function ClientForm({
  clientFormData,
  setClientFormData,
}: ClientFormProps) {
  const handleFormChange = (key: string) => (value: string) => {
    setClientFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderInputs = () => {
    return Object.entries(clientFormData).map(([key, value]) => {
      switch (key) {
        case "first_name":
          return (
            <TextInput
              key={key}
              label="First Name"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "last_name":
          return (
            <TextInput
              key={key}
              label="Last Name"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "email":
          return (
            <TextInput
              key={key}
              label="Email"
              value={value}
              onChange={handleFormChange(key)}
            />
          );
        case "phone":
          return (
            <TextInput
              key={key}
              label="Phone"
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
