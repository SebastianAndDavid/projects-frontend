import { createContext, useContext, useEffect, useState } from "react";
import { getAllProjects } from "../fetch-utils";
import { ProjectsContextType } from "./projectsContext.interface";

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => {},
});

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleGetAllProjects = async () => {
      const response = await getAllProjects();
      setProjects(response);
    };
    handleGetAllProjects();
  }, []);

  const stateAndSetters = {
    projects,
    setProjects,
  };

  return (
    <ProjectsContext.Provider value={stateAndSetters}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const { projects, setProjects } = useContext(ProjectsContext);
  return [projects, setProjects] as const;
}
