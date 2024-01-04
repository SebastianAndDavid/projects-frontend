import { useEffect, useState } from "react";
import {
  ProjectCardProps,
  ProjectSelect,
} from "../projects/projects.interface";
import { getAllProjectsByHomeownerId } from "../../fetch-utils";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ client }: ProjectCardProps) {
  const [projectsArray, setProjectsArray] = useState<ProjectSelect[]>([]);

  const navigate = useNavigate();

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
        <div
          className="project-card-client"
          onClick={() => navigate(`/client-create-page/${client.id}`)}
        >
          {client.first_name}
        </div>
      </div>
      {projectsArray.map((project) => {
        return (
          <div className="project-card-details-container" key={project.id}>
            <div className="project-card-details">{project.name} </div>
            <button
              onClick={() => navigate(`/project-create-page/${project.id}`)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
}
