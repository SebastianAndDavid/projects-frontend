interface TaskTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TaskTextInput({ value, onChange }: TaskTextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
