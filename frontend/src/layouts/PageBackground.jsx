export default function PageBackground({ children }) {
  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden
        bg-white
        lg:bg-surface
        lg:flex lg:items-center lg:justify-center lg:p-6 xl:p-10
      "
    >
      {/* Premium ambient background — dark base + soft color glows + grid.
          Hidden on mobile so the auth card stays a clean full-bleed white screen. */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* base subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-raised" />

        {/* soft grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* blurred color blobs */}
        <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-brand/30 blur-[120px] animate-drift" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-accent-violet/25 blur-[120px] animate-driftReverse" />
        <div className="absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-amber/15 blur-[120px] animate-drift" />

        {/* gentle vignette so the white card pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-surface/30" />
      </div>

      <div
        className="
          relative bg-white w-full min-h-screen
          lg:min-h-0 lg:h-[calc(100vh-3rem)] xl:h-[calc(100vh-5rem)]
          lg:max-w-[1180px] lg:rounded-[28px]
          lg:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
          lg:ring-1 lg:ring-white/10
          lg:overflow-hidden
          flex
        "
      >
        {children}
      </div>
    </div>
  );
}
