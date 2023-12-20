import { createContext, useContext, useEffect, useState } from "react";
import { getAllProjects } from "../fetch-utils";
import { ProjectsContextType } from "./projectsContext.interface";

const ProjectsContext = createContext<ProjectsContextType>({
  projectsCon: [],
  setProjectsCon: () => {},
});

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projectsCon, setProjectsCon] = useState([]);

  useEffect(() => {
    const handleGetAllProjects = async () => {
      const response = await getAllProjects();
      setProjectsCon(response);
    };
    handleGetAllProjects();
  }, []);

  const stateAndSetters = {
    projectsCon,
    setProjectsCon,
  };

  return (
    <ProjectsContext.Provider value={stateAndSetters}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const { projectsCon, setProjectsCon } = useContext(ProjectsContext);
  return [projectsCon, setProjectsCon] as const;
}
