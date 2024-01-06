import { useEffect } from "react";
import { PhaseListItemProps } from "./phaseItem.interface";
import { getAllReadOnlyTasksByMilestoneId } from "../../../fetch-utils";

export default function PhaseListItem({ phase }: PhaseListItemProps) {
  const handleFetchReadOnlyTasksByMilestoneId = async () => {
    const data = await getAllReadOnlyTasksByMilestoneId();
    console.log("data", data);
  };
  useEffect(() => {
    handleFetchReadOnlyTasksByMilestoneId();
  }, []);

  return (
    <div>
      <div>{phase.name}</div>
      <div>Milestones: {phase.MilestonesReadOnly.length}</div>
      <div>Tasks: </div>
    </div>
  );
}
