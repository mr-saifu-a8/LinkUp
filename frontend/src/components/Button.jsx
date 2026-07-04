export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  const base =
    "w-full h-12 sm:h-13 rounded-full font-semibold text-[15px] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-lg",
    secondary:
      "bg-brand-light text-brand hover:bg-brand/20",
    outline:
      "bg-white text-ink border border-gray-200 hover:border-brand/40 hover:bg-brand-lighter",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
