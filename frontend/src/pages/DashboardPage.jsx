import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/Button";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft border border-gray-100 text-center">
        <p className="text-sm font-semibold text-brand">Authenticated</p>
        <h1 className="mt-3 text-3xl font-bold text-ink">
          Welcome, {user?.name || "there"}
        </h1>
        <p className="mt-3 text-sm text-ink-light">
          Your authentication flow is now connected to the backend.
        </p>
        <div className="mt-6 space-y-3">
          <Button onClick={() => navigate("/welcome")}>Go to welcome</Button>
          <button
            type="button"
            onClick={logout}
            className="w-full text-sm font-semibold text-ink-light hover:text-brand"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
