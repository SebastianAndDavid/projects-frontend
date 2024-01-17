import { useEffect, useState } from "react";
import { getAllReadOnlyTasksByMilestoneId } from "../../../fetch-utils";
import { MilestoneItemProps, TaskReadOnly } from "./phaseItem.interface";
import TaskItem from "./TaskItem";

export default function MilestoneItem({ milestone }: MilestoneItemProps) {
  const [tasksReadOnlyArray, setTasksReadOnlyArray] = useState<TaskReadOnly[]>(
    []
  );

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
    <div className="milestone-body-container">
      <div>{milestone.name}</div>
      <div className="task-input-container">
        {tasksReadOnlyArray.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}
