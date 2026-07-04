import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageBackground from "../layouts/PageBackground";
import { LogoMark } from "../components/Illustrations";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboarding"), 1600);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <PageBackground>
      <div className="relative flex-1 min-h-screen lg:min-h-0 flex items-center justify-center overflow-hidden bg-white screen-transition">
        <span className="absolute top-[12%] left-[10%] w-3 h-3 rounded-full bg-brand-light" />
        <span className="absolute top-[20%] left-[22%] w-6 h-6 rounded-full bg-brand-light/80" />
        <span className="absolute top-[34%] left-[8%] w-2 h-2 rounded-full bg-brand/40" />
        <span className="absolute bottom-[18%] left-[14%] w-2.5 h-2.5 rounded-full bg-brand/30" />
        <span className="absolute bottom-[10%] left-[24%] w-4 h-4 rounded-full bg-brand-light" />
        <span className="absolute bottom-[14%] left-[34%] w-2 h-2 rounded-full bg-brand/50" />

        <LogoMark size={96} />

        <div className="absolute bottom-[8%] flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulseSlow [animation-delay:-0.3s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-light animate-pulseSlow [animation-delay:-0.15s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-light animate-pulseSlow" />
        </div>
      </div>
    </PageBackground>
  );
}
