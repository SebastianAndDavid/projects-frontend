import { PhaseListItemProps } from "./phaseItem.interface";

export default function PhaseListItem({ phase }: PhaseListItemProps) {
  return (
    <div className="phase-table-row-item">
      <div className="phase-table-row-item-name">{phase.name}</div>
      <div className="milestones">
        Milestones: {phase.MilestonesReadOnly.length}
      </div>
      <div className="tasks">Tasks: </div>
    </div>
  );
}
