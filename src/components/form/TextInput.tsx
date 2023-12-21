import "./Form.css";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ label, value, onChange }: TextInputProps) {
  return (
    <div className="input-row">
      <div className="input-col-1">
        <div className="label-container">
          <label>{label}</label>
        </div>
      </div>
      <div className="input-col-2">
        <div className="clients-input-container">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
