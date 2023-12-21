import { ProjectCardProps } from "../projects/projects.interface";

export default function ProjectCard({ client }: ProjectCardProps) {
  return <div>{client.first_name}</div>;
}
