import { useEffect, useState } from "react";
import { getAllReadOnlyTasksByMilestoneId } from "../../../fetch-utils";
import { MilestoneItemProps, TaskReadOnly } from "./phaseItem.interface";
import TaskItem from "./TaskItem";
import TextInput from "../TextInput";

export default function MilestoneItem({ milestone }: MilestoneItemProps) {
  const [tasksReadOnlyArray, setTasksReadOnlyArray] = useState<TaskReadOnly[]>(
    []
  );

  const [taskFormData, setTaskFormData] = useState({
    name: "",
  });

  console.log("taskFormData", taskFormData);
  const fetchTasks = async () => {
    const data = await getAllReadOnlyTasksByMilestoneId(milestone.id);
    if (data) {
      setTasksReadOnlyArray(data);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFormChange = (key: string) => (value: string) => {
    setTaskFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderInputs = () => {
    return Object.entries(taskFormData).map(([key, value]) => {
      if (key == "name")
        return (
          <TextInput
            key={key}
            label="Name"
            value={value}
            onChange={handleFormChange(key)}
          />
        );
    });
  };

  return (
    <div>
      <div>{milestone.name}</div>
      <div>
        <form>
          {tasksReadOnlyArray.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                taskFormData={taskFormData}
                setTaskFormData={setTaskFormData}
                renderInputs={renderInputs}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
