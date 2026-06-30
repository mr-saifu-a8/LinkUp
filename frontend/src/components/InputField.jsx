import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiCheck, FiX } from "react-icons/fi";

export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  icon = "mail", // "mail" | "lock" | "none"
  state = "default", // "default" | "error" | "success"
  label,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const Icon = icon === "lock" ? FiLock : icon === "mail" ? FiMail : null;

  const stateStyles = {
    default:
      "bg-gray-50 lg:bg-white border-transparent lg:border-gray-200 focus-within:border-brand/50 focus-within:bg-white",
    error: "bg-red-50 border-red-300",
    success: "bg-gray-50 lg:bg-white border-transparent lg:border-gray-200",
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-ink">{label}</label>
      )}
      <div
        className={`flex items-center gap-2.5 h-12 sm:h-13 px-4 rounded-xl border transition-colors duration-200 ${stateStyles[state]}`}
      >
        {Icon && (
          <Icon
            size={18}
            className={state === "error" ? "text-red-400 shrink-0" : "text-ink-muted shrink-0"}
          />
        )}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-ink-muted min-w-0"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-ink-muted shrink-0"
            tabIndex={-1}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
        {!isPassword && state === "success" && (
          <FiCheck size={18} className="text-emerald-500 shrink-0" />
        )}
        {state === "error" && !isPassword && (
          <FiX size={18} className="text-red-400 shrink-0" />
        )}
      </div>
    </div>
  );
}
