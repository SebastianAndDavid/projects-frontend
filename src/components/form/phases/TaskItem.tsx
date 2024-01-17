import { TaskItemProps } from "./phaseItem.interface";

export default function TaskItem({
  task,
  taskFormData,
  setTaskFormData,
}: TaskItemProps) {
  console.log("task", task);
  console.log("taskFormData", taskFormData);
  return <div>TaskItem</div>;
}
