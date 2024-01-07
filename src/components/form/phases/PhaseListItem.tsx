import { useEffect, useState } from "react";
import { PhaseListItemProps } from "./phaseItem.interface";
import { getMilestoneByPhaseId } from "../../../fetch-utils";

export default function PhaseListItem({ phase }: PhaseListItemProps) {
  const [milestoneByPhaseId, setMilestoneByPhaseId] = useState([]);
  console.log("milestoneByPhaseId", milestoneByPhaseId);

  const handleFetchMilestoneByPhaseId = async () => {
    const data = await getMilestoneByPhaseId();
    if (data) setMilestoneByPhaseId(data);
  };

  useEffect(() => {
    handleFetchMilestoneByPhaseId();
  }, []);

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
