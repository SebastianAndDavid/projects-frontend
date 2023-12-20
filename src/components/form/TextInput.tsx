interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ label, value, onChange }: TextInputProps) {
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
