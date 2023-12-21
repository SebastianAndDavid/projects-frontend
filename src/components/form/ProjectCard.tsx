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

  return <div>{client.first_name}</div>;
}
