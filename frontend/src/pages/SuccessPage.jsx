import { useLocation, useNavigate } from "react-router-dom";
import PageBackground from "../layouts/PageBackground";
import Button from "../components/Button";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title || "Welcome!";

  return (
    <PageBackground>
      <div className="flex-1 min-h-screen lg:min-h-0 flex flex-col items-center justify-center px-8 text-center bg-white screen-transition">
        <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mb-6 animate-scaleIn">
          <FiCheckCircle size={40} className="text-brand" />
        </div>
        <h1 className="text-xl lg:text-2xl font-bold text-ink mb-2">{title}</h1>
        <p className="text-sm text-ink-light mb-8">
          You're all set. Welcome aboard!
        </p>
        <Button onClick={() => navigate("/welcome")} className="max-w-[220px]">
          Continue
        </Button>
      </div>
    </PageBackground>
  );
}
