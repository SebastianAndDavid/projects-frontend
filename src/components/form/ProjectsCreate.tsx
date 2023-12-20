import { useState } from "react";
import Form from "./Form";

export default function ProjectsCreate() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
    </div>
  );
}
