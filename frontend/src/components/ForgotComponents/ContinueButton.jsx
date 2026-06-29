import React from 'react'

function ContinueButton({ disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-full py-3.5 text-sm font-semibold transition active:scale-[0.98] ${disabled
        ? "bg-rose-200 text-white cursor-not-allowed"
        : "bg-rose-500 text-white hover:bg-rose-600"
        }`}
    >
      Continue
    </button>
  );
}
export default ContinueButton
