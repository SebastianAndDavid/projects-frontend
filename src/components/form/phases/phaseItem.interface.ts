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
