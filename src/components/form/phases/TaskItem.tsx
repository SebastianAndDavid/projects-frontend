import { useEffect, useState } from "react";
import { TaskItemProps } from "./phaseItem.interface";
import TextInput from "../TextInput";

export default function TaskItem({ task }: TaskItemProps) {
  const [taskFormData, setTaskFormData] = useState({
    name: "",
  });

  useEffect(() => {
    setTaskFormData(task);
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

  return <div>{renderInputs()}</div>;
}
