import { useEffect } from "react";
import { TaskItemProps } from "./phaseItem.interface";

export default function TaskItem({
  task,
  taskFormData,
  setTaskFormData,
  renderInputs,
}: TaskItemProps) {
  useEffect(() => {
    setTaskFormData(task);
  }, []);

  console.log("taskFormdata", taskFormData);

  return <div>{renderInputs()}</div>;
}
