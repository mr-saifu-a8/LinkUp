import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout from "../layouts/AuthLayout";
import PageBackground from "../layouts/PageBackground";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SocialButtons from "../components/SocialButtons";
import Checkbox from "../components/Checkbox";
import { BrandLogo } from "../components/Illustrations";
import { FiArrowLeft } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

const LOGIN_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, requestPasswordReset, confirmPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetStep, setResetStep] = useState(1);
  const [error, setError] = useState("");

  const passwordState =
    password.length === 0
      ? "default"
      : password.length < 6
        ? "error"
        : "success";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      toast.success("Signed in successfully");
      navigate("/dashboard");
    } catch (err) {
      const message = err.message || "Login failed";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordRequest = async (e) => {
    e.preventDefault();
    setResetLoading(true);

    try {
      await requestPasswordReset(resetEmail);
      toast.success("OTP sent to your email");
      setResetStep(2);
    } catch (err) {
      toast.error(err.message || "Unable to send OTP");
    } finally {
      setResetLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetLoading(true);

    try {
      await confirmPasswordReset(resetEmail, otp, newPassword);
      toast.success("Password updated successfully");
      setShowReset(false);
      setResetStep(1);
      setOtp("");
      setNewPassword("");
      setResetEmail("");
    } catch (err) {
      toast.error(err.message || "Password reset failed");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <PageBackground>
      <AuthLayout image={LOGIN_IMAGE} imageAlt="Person studying with a tablet">
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
              Welcome back to <span className="text-brand">SocialApp</span>
            </h1>
            <p className="mt-3 text-sm lg:text-[15px] text-ink-light leading-relaxed max-w-md">
              Log in to keep up with your friends and the communities you care
              about.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <p className="text-sm font-medium text-ink">Log in with:</p>
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
                  placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <Checkbox
                  checked={remember}
                  onChange={setRemember}
                  label="Remember me"
                />
                <button
                  type="button"
                  onClick={() => setShowReset((value) => !value)}
                  className="text-sm font-medium text-brand hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Log in"}
              </Button>

              {showReset && (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 space-y-3">
                  {resetStep === 1 ? (
                    <form
                      onSubmit={handleForgotPasswordRequest}
                      className="space-y-3"
                    >
                      <InputField
                        label="Email"
                        icon="none"
                        type="email"
                        placeholder="Enter your email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                      />
                      <Button type="submit" disabled={resetLoading}>
                        {resetLoading ? "Sending OTP..." : "Send OTP"}
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handlePasswordReset} className="space-y-3">
                      <InputField
                        label="OTP"
                        icon="none"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <InputField
                        label="New password"
                        icon="none"
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <Button type="submit" disabled={resetLoading}>
                        {resetLoading
                          ? "Updating password..."
                          : "Reset password"}
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </form>

            <p className="text-center text-sm text-ink-light">
              Don't have account?{" "}
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
            Copyright © 2026 SocialApp
          </p>
        </div>
      </AuthLayout>
    </PageBackground>
  );
}
