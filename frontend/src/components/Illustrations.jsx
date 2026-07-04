// Hand-built flat illustrations matching the dark-navy + coral accent style,
// used for the splash / onboarding screens (mobile-first moments).

export function LogoMark({ size = 70 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-2xl bg-brand flex items-center justify-center shadow-soft animate-scaleIn"
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>
    </div>
  );
}

export function BrandLogo({ size = 28 }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        style={{ width: size, height: size }}
        className="rounded-lg bg-brand flex items-center justify-center shrink-0"
      >
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="white" />
        </svg>
      </div>
      <span className="font-extrabold text-lg tracking-tight text-ink">
        Link<span className="text-brand">Up</span>
      </span>
    </div>
  );
}

export function SocialIllustration() {
  return (
    <svg viewBox="0 0 280 220" className="w-full h-auto max-w-[260px] mx-auto">
      <ellipse cx="140" cy="195" rx="90" ry="10" fill="#FFE3E8" />
      <path
        d="M40 70 C40 30, 100 10, 150 35 C190 55, 160 95, 200 100 C240 105, 250 60, 230 30"
        stroke="#1B1B29"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="40" cy="70" r="9" fill="#FB4E66" />
      <circle cx="230" cy="30" r="6" fill="#1B1B29" />
      <rect x="118" y="70" width="46" height="62" rx="14" fill="#1B1B29" />
      <circle cx="141" cy="55" r="20" fill="#1B1B29" />
      <rect x="128" y="78" width="26" height="20" rx="4" fill="#FB4E66" />
      <rect x="100" y="150" width="18" height="45" rx="6" fill="#1B1B29" />
      <rect x="162" y="150" width="18" height="45" rx="6" fill="#1B1B29" />
      <circle cx="90" cy="120" r="5" fill="#FB4E66" />
      <circle cx="195" cy="135" r="5" fill="#FB4E66" />
      <circle cx="60" cy="150" r="4" fill="#FFB7C2" />
      <circle cx="220" cy="170" r="4" fill="#FFB7C2" />
    </svg>
  );
}

export function ConnectIllustration() {
  return (
    <svg viewBox="0 0 280 220" className="w-full h-auto max-w-[260px] mx-auto">
      <rect x="20" y="60" width="78" height="48" rx="10" fill="#F4F4F7" />
      <circle cx="40" cy="80" r="9" fill="#FB4E66" />
      <rect x="55" y="74" width="32" height="6" rx="3" fill="#D9D9E3" />
      <rect x="55" y="86" width="22" height="6" rx="3" fill="#D9D9E3" />

      <rect x="182" y="90" width="78" height="48" rx="10" fill="#F4F4F7" />
      <circle cx="202" cy="110" r="9" fill="#1B1B29" />
      <rect x="217" y="104" width="32" height="6" rx="3" fill="#D9D9E3" />
      <rect x="217" y="116" width="22" height="6" rx="3" fill="#D9D9E3" />

      <circle cx="140" cy="150" r="34" fill="#1B1B29" />
      <circle cx="140" cy="138" r="13" fill="#FFE3E8" />
      <path d="M120 168c4-12 16-18 20-18s16 6 20 18" stroke="#FFE3E8" strokeWidth="5" strokeLinecap="round" fill="none" />

      <path d="M98 90 L128 130" stroke="#FB4E66" strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
      <path d="M182 115 L160 140" stroke="#FB4E66" strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />

      <ellipse cx="140" cy="205" rx="90" ry="8" fill="#FFE3E8" />
    </svg>
  );
}

export function FeaturesIllustration() {
  return (
    <svg viewBox="0 0 280 220" className="w-full h-auto max-w-[260px] mx-auto">
      <ellipse cx="140" cy="200" rx="95" ry="9" fill="#FFE3E8" />
      <rect x="150" y="60" width="80" height="100" rx="14" fill="#1B1B29" />
      <rect x="160" y="78" width="60" height="8" rx="4" fill="#FB4E66" />
      <rect x="160" y="94" width="44" height="6" rx="3" fill="#444459" />
      <rect x="160" y="106" width="50" height="6" rx="3" fill="#444459" />
      <circle cx="190" cy="140" r="14" fill="#FB4E66" />

      <circle cx="62" cy="110" r="30" fill="#FFE3E8" />
      <circle cx="62" cy="100" r="12" fill="#1B1B29" />
      <path d="M44 132c3-11 12-16 18-16s15 5 18 16" stroke="#1B1B29" strokeWidth="5" strokeLinecap="round" fill="none" />

      <path d="M95 95 L130 80" stroke="#1B1B29" strokeWidth="4" strokeLinecap="round" />
      <path d="M120 70 L130 80 L118 86" stroke="#1B1B29" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="245" cy="50" r="6" fill="#FB4E66" />
      <circle cx="30" cy="60" r="4" fill="#FB4E66" />
    </svg>
  );
}

export function WelcomeIllustration() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-auto max-w-[260px] mx-auto">
      <g>
        <ellipse cx="85" cy="120" rx="34" ry="28" fill="#1B1B29" />
        <circle cx="85" cy="78" r="26" fill="#1B1B29" />
        <path d="M64 60 L70 38 L80 58 Z" fill="#1B1B29" />
        <path d="M106 60 L100 38 L90 58 Z" fill="#1B1B29" />
        <circle cx="76" cy="78" r="3" fill="#FB4E66" />
        <circle cx="94" cy="78" r="3" fill="#FB4E66" />
        <path d="M120 110 Q145 100 140 130" stroke="#1B1B29" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
      <g>
        <ellipse cx="195" cy="125" rx="32" ry="26" fill="#3A3A4A" />
        <circle cx="195" cy="85" r="24" fill="#3A3A4A" />
        <path d="M176 68 L182 48 L191 66 Z" fill="#3A3A4A" />
        <path d="M214 68 L208 48 L199 66 Z" fill="#3A3A4A" />
        <circle cx="187" cy="85" r="3" fill="#FB4E66" />
        <circle cx="203" cy="85" r="3" fill="#FB4E66" />
        <path d="M195 92 q4 4 8 0" stroke="#FB4E66" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="180" y="100" width="30" height="10" rx="5" fill="#FB4E66" />
      </g>
      <circle cx="40" cy="40" r="3" fill="#FB4E66" />
      <circle cx="250" cy="150" r="4" fill="#FB4E66" />
      <circle cx="260" cy="40" r="3" fill="#FFB7C2" />
    </svg>
  );
}
