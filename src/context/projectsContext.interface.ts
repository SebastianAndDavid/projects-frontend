export interface ProjectsContextType {
  projects: object[];
  setProjects: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface PhasesReadOnlyContextType {
  phasesArrayReadOnly: PhaseReadOnlyArrayType[];
  setPhasesArrayReadOnly: React.Dispatch<
    React.SetStateAction<PhaseReadOnlyArrayType[]>
  >;
  milestonesArrayReadOnly: MilestonesReadOnlyArrayType[];
  setMilestonesArrayReadOnly: React.Dispatch<
    React.SetStateAction<MilestonesReadOnlyArrayType[]>
  >;
}

export interface PhaseReadOnlyArrayType {
  id: number;
  name: string;
  MilestonesReadOnly: [];
}

export interface MilestonesReadOnlyArrayType {
  id: number;
  name: string;
  phaseId: number;
}
