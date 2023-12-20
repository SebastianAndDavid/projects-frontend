import { useProjects } from "../../context/projectsContext";

export default function Form() {
  const [projectsCon] = useProjects();
  console.log("projectsCon", projectsCon);
  return <div>Form</div>;
}
