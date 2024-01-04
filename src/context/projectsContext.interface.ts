export interface ProjectsContextType {
  projects: object[];
  setProjects: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface PhasesReadOnlyContextType {
  phasesArrayReadOnly: object[];
  setPhasesArrayReadOnly: React.Dispatch<React.SetStateAction<never[]>>;
}
