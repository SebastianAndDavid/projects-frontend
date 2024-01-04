import { createContext, useContext, useEffect, useState } from "react";
import { PhasesReadOnlyContextType } from "./projectsContext.interface";
import { getAllReadOnlyPhases } from "../fetch-utils";

const ProjectsContext = createContext<PhasesReadOnlyContextType>({
  phasesArrayReadOnly: [],
  setPhasesArrayReadOnly: () => {},
});

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phasesArrayReadOnly, setPhasesArrayReadOnly] = useState([]);

  const handleFetchAllPhasesReadOnly = async () => {
    const data = await getAllReadOnlyPhases();
    if (data) setPhasesArrayReadOnly(data);
  };
  useEffect(() => {
    handleFetchAllPhasesReadOnly();
  }, []);

  const stateAndSetters = {
    phasesArrayReadOnly,
    setPhasesArrayReadOnly,
  };

  return (
    <ProjectsContext.Provider value={stateAndSetters}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function usePhasesReadOnly() {
  const { phasesArrayReadOnly, setPhasesArrayReadOnly } =
    useContext(ProjectsContext);
  return [phasesArrayReadOnly, setPhasesArrayReadOnly] as const;
}
