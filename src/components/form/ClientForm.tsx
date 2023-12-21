import {
  createHomeowner,
  getHomeownerById,
  updateHomeowner,
} from "../../fetch-utils";
import { ClientFormProps } from "../homeowners/homeowner.interface";
import TextInput from "./TextInput";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ClientForm({
  clientFormData,
  setClientFormData,
}: ClientFormProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleFetchClientByID = async () => {
      if (id) {
        const response = await getHomeownerById(id);
        setClientFormData(response);
      }
    };
    handleFetchClientByID();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await updateHomeowner(Number(id), clientFormData);
    } else {
      await createHomeowner(clientFormData);
    }
    navigate("/client-page");
  };

  return (
    <div className="form-container">
      <div className="client-page-header">
        <h1 className="new-client">New client</h1>
        <hr />
        <form className="client-form" onSubmit={(e) => handleSubmit(e)}>
          {renderInputs()}
          <button>Save client</button>
        </form>
      </div>
    </div>
  );
}
