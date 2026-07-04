export default function ProgressDots({ total, active }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active ? "w-6 bg-brand" : "w-1.5 bg-brand-light"
          }`}
        />
      ))}
    </div>
  );
}
