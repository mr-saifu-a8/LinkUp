import { Routes, Route, Navigate } from "react-router-dom";
<<<<<<< HEAD

import { LoginPage, OnboardingPage, SignupPage, SplashPage, SuccessPage, WelcomePage, ChattingPage } from "./pages/LinkUpPages";

=======
import SplashPage from "./pages/SplashPage";
import OnboardingPage from "./pages/OnboardingPage";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SuccessPage from "./pages/SuccessPage";

>>>>>>> f97e8a079325cb89efd6077a55408e8ccad451c6
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/success" element={<SuccessPage />} />
<<<<<<< HEAD
      <Route path="/chat" element={<ChattingPage />} />
=======
>>>>>>> f97e8a079325cb89efd6077a55408e8ccad451c6
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
