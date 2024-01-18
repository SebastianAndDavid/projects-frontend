import {
  MilestonesReadOnlyArrayType,
  PhaseReadOnlyArrayType,
} from "../../../context/projectsContext.interface";

export interface PhaseListItemProps {
  phase: PhaseReadOnlyArrayType;
}

export interface MilestoneItemProps {
  milestone: MilestonesReadOnlyArrayType;
}

export interface TaskReadOnly {
  id?: number;
  name: string;
  milestoneId: number;
}

export interface TaskItemProps {
  task: TaskReadOnly;
}
