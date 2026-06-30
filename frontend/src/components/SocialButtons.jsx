import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const PROVIDERS = [
  { key: "google", icon: <FcGoogle size={20} />, label: "Google" },
  { key: "facebook", icon: <FaFacebook size={20} className="text-[#1877F2]" />, label: "Facebook" },
  { key: "apple", icon: <FaApple size={20} className="text-ink" />, label: "Apple" },
];

export default function SocialButtons({ layout = "grid" }) {
  // layout: "grid" -> two-up labeled buttons (desktop login style)
  //         "stacked" -> full-width labeled buttons, one per row
  //         "row" -> compact icon-only circles in a row

  if (layout === "row") {
    return (
      <div className="flex items-center justify-center gap-4">
        {PROVIDERS.map((p) => (
          <button
            key={p.key}
            type="button"
            aria-label={`Continue with ${p.label}`}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all duration-200"
          >
            {p.icon}
          </button>
        ))}
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className="flex flex-col gap-3">
        {PROVIDERS.map((p) => (
          <button
            key={p.key}
            type="button"
            className="w-full h-12 rounded-full border border-gray-200 flex items-center justify-center gap-3 text-sm font-medium text-ink hover:bg-gray-50 active:scale-[0.98] transition-all duration-200"
          >
            {p.icon}
            Continue with {p.label}
          </button>
        ))}
      </div>
    );
  }

  // grid (default) — matches the reference "Google | Facebook" two-column layout
  return (
    <div className="grid grid-cols-2 gap-3">
      {PROVIDERS.slice(0, 2).map((p) => (
        <button
          key={p.key}
          type="button"
          className="h-12 rounded-xl border border-gray-200 flex items-center justify-center gap-2.5 text-sm font-medium text-ink hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200"
        >
          {p.icon}
          {p.label}
        </button>
      ))}
    </div>
  );
}
