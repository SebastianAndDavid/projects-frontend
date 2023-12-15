import { useState } from "react";
import "./Homeowner.css";
import { createHomeowner } from "../fetch-utils";
import { useNavigate } from "react-router-dom";

export default function HomeownersCreate() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip_code: "",
  });
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (inputName: string, value: string) => {
    if (inputName == first_name) {
      setFirst_Name(value);
    } else if (inputName == last_name) {
      setLast_Name(value);
    } else if (inputName == company) {
      setCompany(value);
    } else if (inputName == email) {
      setEmail(value);
    } else if (inputName == phone) {
      setPhone(value);
    } else if (inputName == street) {
      setStreet(value);
    } else if (inputName == apt) {
      setApt(value);
    } else if (inputName == city) {
      setCity(value);
    } else if (inputName == state) {
      setState(value);
    } else if (inputName == zip) {
      setZip(value);
    }
    setFormData((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createHomeowner(formData);
    setFormData({
      first_name: "",
      last_name: "",
      company: "",
      email: "",
      phone: "",
      street: "",
      apt: "",
      city: "",
      state: "",
      zip_code: "",
    });
    navigate("/homeowner-page");
  };

  return (
    <div className="homeowner-create">
      <h2>Client Information</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <section className="col-1">
            First Name
            <input
              type="text"
              value={formData.first_name}
              onChange={(e) => handleInputChange("first_name", e.target.value)}
            />
            Email
            <input
              type="text"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            Company
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            Address Line 1
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
            />
            City
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
          </section>
          <section className="col-2">
            Last Name
            <input
              type="text"
              value={formData.last_name}
              onChange={(e) => handleInputChange("last_name", e.target.value)}
            />
            Phone
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            Apartment #
            <input
              type="text"
              value={formData.apt}
              onChange={(e) => handleInputChange("apt", e.target.value)}
            />
            State
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            />
            Zip
            <input
              type="text"
              value={formData.zip_code}
              onChange={(e) => handleInputChange("zip_code", e.target.value)}
            />
          </section>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
