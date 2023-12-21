import { useEffect, useState } from "react";
import {
  ProjectCardProps,
  ProjectSelect,
} from "../projects/projects.interface";
import { getAllProjectsByHomeownerId } from "../../fetch-utils";

export default function ProjectCard({ client }: ProjectCardProps) {
  const [projectsArray, setProjectsArray] = useState<ProjectSelect[]>([]);

  useEffect(() => {
    const handleFetchProject = async () => {
      const data = await getAllProjectsByHomeownerId(client.id);
      setProjectsArray(data);
    };
    handleFetchProject();
  }, []);

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-client">{client.first_name}</div>
      </div>
      {projectsArray.map((project) => {
        return (
          <div className="project-card-details-container" key={project.id}>
            <div className="project-card-details">{project.name}</div>
          </div>
        );
      })}
    </div>
  );
}
