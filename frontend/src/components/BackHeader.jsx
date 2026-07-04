import { FiArrowLeft } from "react-icons/fi";

export default function BackHeader({ onBack }) {
  return (
    <button
      onClick={onBack}
      aria-label="Go back"
      className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full text-ink hover:bg-gray-100 active:scale-90 transition-all duration-200"
    >
      <FiArrowLeft size={22} />
    </button>
  );
}
