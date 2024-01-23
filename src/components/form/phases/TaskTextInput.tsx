import { useState } from "react";

interface TaskTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TaskTextInput({ value, onChange }: TaskTextInputProps) {
  const [inputIsClicked, setInputIsClicked] = useState(false);

  return (
    <div className="task-input" onClick={() => setInputIsClicked(true)}>
      {!inputIsClicked && value !== "" ? (
        <div>{value}</div>
      ) : (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}
