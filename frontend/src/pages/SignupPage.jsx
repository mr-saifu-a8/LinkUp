import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import PageBackground from "../layouts/PageBackground";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SocialButtons from "../components/SocialButtons";
import Checkbox from "../components/Checkbox";
import { BrandLogo } from "../components/Illustrations";
import { FiArrowLeft } from "react-icons/fi";

const SIGNUP_IMAGE =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const passwordState =
    password.length === 0 ? "default" : password.length < 6 ? "error" : "success";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: { title: "Account created" } });
  };

  return (
    <PageBackground>
      <AuthLayout image={SIGNUP_IMAGE} imageAlt="Person taking notes while studying">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <button
              onClick={() => navigate("/welcome")}
              aria-label="Back"
              className="lg:hidden w-9 h-9 -mr-1 flex items-center justify-center rounded-full text-ink hover:bg-gray-100 active:scale-90 transition-all duration-200"
            >
              <FiArrowLeft size={20} />
            </button>
          </div>

          <div className="mt-10 lg:mt-12">
            <h1 className="text-[26px] sm:text-3xl lg:text-[32px] font-extrabold text-ink leading-tight">
              Create your <span className="text-brand">account</span>
            </h1>
            <p className="mt-3 text-sm lg:text-[15px] text-ink-light leading-relaxed max-w-md">
              Join SocialApp in seconds and start connecting with people who
              share your interests.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <p className="text-sm font-medium text-ink">Sign up with:</p>
            <SocialButtons layout="grid" />

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-ink-muted font-medium">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="E-mail"
                icon="none"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <InputField
                  label="Password:"
                  icon="none"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  state={passwordState}
                />
                {passwordState === "error" && (
                  <p className="text-xs text-red-500 mt-1.5 ml-1">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>

              <Checkbox
                checked={agree}
                onChange={setAgree}
                label="I agree to the Terms & Privacy Policy"
              />

              <Button type="submit">Sign up</Button>
            </form>

            <p className="text-center text-sm text-ink-light">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-brand font-semibold hover:underline"
              >
                Log in
              </button>
            </p>
          </div>

          <div className="flex-1" />
          <p className="text-center text-xs text-ink-muted pt-10 lg:pt-6">
            Copyright © 2026 SocialApp
          </p>
        </div>
      </AuthLayout>
    </PageBackground>
  );
}
