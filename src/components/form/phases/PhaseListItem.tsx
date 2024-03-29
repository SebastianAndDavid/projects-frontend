import { useEffect, useState } from "react";
import { PhaseListItemProps } from "./phaseItem.interface";
import {
  getAllReadOnlyTasksByMilestoneId,
  getMilestoneByPhaseId,
} from "../../../fetch-utils";
import { MilestonesReadOnlyArrayType } from "../../../context/projectsContext.interface";

export default function PhaseListItem({ phase }: PhaseListItemProps) {
  const [milestoneByPhaseId, setMilestoneByPhaseId] = useState<
    MilestonesReadOnlyArrayType[]
  >([]);
  const [totalTasks, setTotalTasks] = useState<number>(0);

  const handleFetchMilestoneByPhaseId = async () => {
    const data = await getMilestoneByPhaseId(phase.id);
    console.log("data 1", data);
    if (data) {
      setMilestoneByPhaseId(data.flat());
      fetchTasks();
    }
  };

  async function fetchTasks() {
    let totalTasksCount = 0;

    for (const milestone of milestoneByPhaseId) {
      const tasks = await getAllReadOnlyTasksByMilestoneId(milestone.id);
      if (tasks) {
        totalTasksCount += tasks.length;
      }
    }

    setTotalTasks(totalTasksCount);
  }

  useEffect(() => {
    handleFetchMilestoneByPhaseId();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [milestoneByPhaseId]);

  return (
    <div className="phase-table-row-item">
      <div className="phase-table-row-item-name">{phase.name}</div>
      <div className="milestones">
        Milestones: {phase.MilestonesReadOnly.length}
      </div>
      <div className="tasks">Tasks: {totalTasks}</div>
    </div>
  );
}
