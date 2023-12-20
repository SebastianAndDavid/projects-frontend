interface NameInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function NameInput({ label, value, onChange }: NameInputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
