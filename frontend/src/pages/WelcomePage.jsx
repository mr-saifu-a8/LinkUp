import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import PageBackground from "../layouts/PageBackground";
import Button from "../components/Button";
import SocialButtons from "../components/SocialButtons";
import { BrandLogo } from "../components/Illustrations";
import { useAuth } from "../contexts/AuthContext";

const WELCOME_IMAGE =
  "https://images.pexels.com/photos/7342998/pexels-photo-7342998.jpeg";

export default function WelcomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  return (
    <PageBackground>
      <AuthLayout image={WELCOME_IMAGE} imageAlt="People connecting online">
        <div className="flex-1 flex flex-col">
          <BrandLogo />

          <div className="mt-10 lg:mt-14">
            <h1 className="text-[26px] sm:text-3xl lg:text-[34px] font-extrabold text-ink leading-tight">
              Welcome to <span className="text-brand">LinkUp</span>
            </h1>
            <p className="mt-3 text-sm lg:text-[15px] text-ink-light leading-relaxed max-w-md">
              Connect with friends, share moments, and discover communities that
              match your interests — all in one place.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <p className="text-sm font-medium text-ink">Continue with:</p>
            <SocialButtons layout="grid" />

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-ink-muted font-medium">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <Button onClick={() => navigate("/login")}>
              Sign in with email
            </Button>

            <p className="text-center text-sm text-ink-light">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-brand font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>

          <div className="flex-1" />
          <p className="text-center text-xs text-ink-muted pt-10 lg:pt-6">
            Copyright © 2026 LinkUp
          </p>
        </div>
      </AuthLayout>
    </PageBackground>
  );
}
