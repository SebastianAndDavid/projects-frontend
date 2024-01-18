import { useEffect, useState } from "react";
import { PhaseListItemProps } from "./phaseItem.interface";
import {
  getAllReadOnlyTasksByMilestoneId,
  getMilestoneByPhaseId,
} from "../../../fetch-utils";
import { MilestonesReadOnlyArrayType } from "../../../context/projectsContext.interface";
import MilestoneItem from "./MilestoneItem";

export default function PhaseListItem({ phase }: PhaseListItemProps) {
  const [milestoneByPhaseId, setMilestoneByPhaseId] = useState<
    MilestonesReadOnlyArrayType[]
  >([]);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleFetchMilestoneByPhaseId = async () => {
    const data = await getMilestoneByPhaseId(phase.id);
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
    <div
      className={
        !isClicked ? "phase-table-row-item" : "phase-table-row-item-clicked"
      }
    >
      <div className="phase-table-row-col-1">
        <div className="row-edit-btn" onClick={() => setIsClicked(!isClicked)}>
          {!isClicked ? "Edit" : "Submit"}
        </div>
        <div className="phase-table-row-item-name">{phase.name}</div>
      </div>
      {!isClicked ? (
        <>
          <div className="milestones">
            Milestones: {phase.MilestonesReadOnly.length}
          </div>
          <div className="tasks">Tasks: {totalTasks}</div>
        </>
      ) : (
        <>
          <div className="phase-table-row-col-2">
            {milestoneByPhaseId.map((milestone) => {
              return <MilestoneItem key={milestone.id} milestone={milestone} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
