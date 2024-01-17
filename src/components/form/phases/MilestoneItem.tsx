import { useEffect, useState } from "react";
import { getAllReadOnlyTasksByMilestoneId } from "../../../fetch-utils";
import { MilestoneItemProps, TaskReadOnly } from "./phaseItem.interface";
import TaskItem from "./TaskItem";

export default function MilestoneItem({ milestone }: MilestoneItemProps) {
  const [tasksReadOnlyArray, setTasksReadOnlyArray] = useState<TaskReadOnly[]>(
    []
  );

  const [taskFormData, setTaskFormData] = useState({
    name: "",
  });

  const fetchTasks = async () => {
    const data = await getAllReadOnlyTasksByMilestoneId(milestone.id);
    if (data) {
      setTasksReadOnlyArray(data);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // const handleFormChange = (key: string) => (value: string) => {
  //   setTaskFormData((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };

  // const renderInputs = () => {
  //   return Object.entries(taskFormData).map(([key, value]) => {
  //     return (
  //       <TextInput
  //         key={key}
  //         label="Name"
  //         value={value}
  //         onChange={handleFormChange(key)}
  //       />
  //     );
  //   });
  // };

  return (
    <div>
      <div>{milestone.name}</div>
      <div>
        {tasksReadOnlyArray.map((task) => {
          return (
            <TaskItem
              task={task}
              taskFormData={taskFormData}
              setTaskFormData={setTaskFormData}
            />
          );
        })}
      </div>
    </div>
  );
}
