import { createContext, useContext, useEffect, useState } from "react";
import {
  MilestonesReadOnlyArrayType,
  PhaseReadOnlyArrayType,
  PhasesReadOnlyContextType,
} from "./projectsContext.interface";
import { getAllReadOnlyMilestones, getAllReadOnlyPhases } from "../fetch-utils";

const ProjectsContext = createContext<PhasesReadOnlyContextType>({
  phasesArrayReadOnly: [],
  setPhasesArrayReadOnly: () => {},
  milestonesArrayReadOnly: [],
  setMilestonesArrayReadOnly: () => {},
});

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phasesArrayReadOnly, setPhasesArrayReadOnly] = useState<
    PhaseReadOnlyArrayType[]
  >([]);
  const [milestonesArrayReadOnly, setMilestonesArrayReadOnly] = useState<
    MilestonesReadOnlyArrayType[]
  >([]);

  const handleFetchAllPhasesReadOnly = async () => {
    const data = await getAllReadOnlyPhases();
    if (data) setPhasesArrayReadOnly(data);
  };

  const handleFetchAllMilestonesReadOnly = async () => {
    const data = await getAllReadOnlyMilestones();
    if (data) setMilestonesArrayReadOnly(data);
  };

  useEffect(() => {
    handleFetchAllPhasesReadOnly();
    handleFetchAllMilestonesReadOnly();
  }, []);

  const stateAndSetters = {
    phasesArrayReadOnly,
    setPhasesArrayReadOnly,
    milestonesArrayReadOnly,
    setMilestonesArrayReadOnly,
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

export function useMilestonesReadOnly() {
  const { milestonesArrayReadOnly, setMilestonesArrayReadOnly } =
    useContext(ProjectsContext);
  return [milestonesArrayReadOnly, setMilestonesArrayReadOnly] as const;
}
