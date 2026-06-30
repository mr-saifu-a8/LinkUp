import { FiCheck } from "react-icons/fi";

export default function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <span className="w-5 h-5 rounded-md border-2 border-gray-300 peer-checked:bg-brand peer-checked:border-brand flex items-center justify-center transition-colors duration-200">
        {checked && <FiCheck size={13} className="text-white" strokeWidth={3} />}
      </span>
      {label && <span className="text-sm text-ink-light">{label}</span>}
    </label>
  );
}
