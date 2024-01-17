import { useEffect, useState } from "react";
import { getAllReadOnlyTasksByMilestoneId } from "../../../fetch-utils";
import { MilestoneItemProps } from "./phaseItem.interface";

interface TaskReadOnly {
  id: number;
  name: string;
  milestoneId: number;
}

export default function MilestoneItem({ milestone }: MilestoneItemProps) {
  const [tasksReadOnlyArray, setTasksReadOnlyArray] = useState<TaskReadOnly[]>(
    []
  );

  console.log(tasksReadOnlyArray);

  const fetchTasks = async () => {
    const data = await getAllReadOnlyTasksByMilestoneId(milestone.id);
    if (data) {
      setTasksReadOnlyArray(data);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div>{milestone.name}</div>
      <div>
        {tasksReadOnlyArray.map((task) => {
          return <div>{task.name}</div>;
        })}
      </div>
    </div>
  );
}
