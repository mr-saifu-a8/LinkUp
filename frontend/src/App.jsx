import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage, OnboardingPage, SignupPage, SplashPage, SuccessPage, WelcomePage, ChattingPage } from "./pages/LinkUpPages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/chat" element={<ChattingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
