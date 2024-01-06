export interface ProjectsContextType {
  projects: object[];
  setProjects: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface PhasesReadOnlyContextType {
  phasesArrayReadOnly: PhaseReadOnlyArrayType[];
  setPhasesArrayReadOnly: React.Dispatch<
    React.SetStateAction<PhaseReadOnlyArrayType[]>
  >;
}

export interface PhaseReadOnlyArrayType {
  id: number;
  name: string;
  MilestonesReadOnly: [];
}
