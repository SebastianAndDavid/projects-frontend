import { useState } from "react";
import ProjectForm from "./ProjectForm";

export default function ProjectsCreate() {
  const [projectFormData, setProjectFormData] = useState({
    name: "",
    description: "",
    deposit: "",
    street: "",
    // apt: "",
    city: "",
    state: "",
    zip_code: "",
  });
  return (
    <ProjectForm
      projectFormData={projectFormData}
      setProjectFormData={setProjectFormData}
    />
  );
}
