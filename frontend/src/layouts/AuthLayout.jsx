const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

export default function AuthLayout({
  children,
  image = DEFAULT_IMAGE,
  imageAlt = "Person learning online",
}) {
  return (
    <>
      {/* Left: form column — full width on mobile, fixed max-width on desktop */}
      <div className="flex-1 lg:flex-none lg:w-[46%] flex flex-col overflow-y-auto no-scrollbar">
        <div className="w-full max-w-[440px] mx-auto px-6 sm:px-10 lg:px-12 py-8 lg:py-12 flex-1 flex flex-col">
          {children}
        </div>
      </div>

      {/* Right: image panel — hidden on mobile/tablet, visible from lg breakpoint up */}
      <div className="hidden lg:block lg:w-[54%] relative">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    </>
  );
}
