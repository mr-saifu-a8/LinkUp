import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() =>
    localStorage.getItem("linkup_token"),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem("linkup_token");
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Session invalid");
        }

        setUser(data.data.user);
        setToken(storedToken);
      } catch (err) {
        localStorage.removeItem("linkup_token");
        setToken(null);
        setUser(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    setError("");
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("linkup_token", data.data.token);
    setToken(data.data.token);
    setUser(data.data.user);
    return data.data;
  };

  const register = async (name, email, password) => {
    setError("");
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }

    localStorage.setItem("linkup_token", data.data.token);
    setToken(data.data.token);
    setUser(data.data.user);
    return data.data;
  };

  const requestPasswordReset = async (email) => {
    const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unable to send reset code");
    }

    return data;
  };

  const confirmPasswordReset = async (email, otp, newPassword) => {
    const response = await fetch(`${API_URL}/api/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp, newPassword }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Password reset failed");
    }

    return data;
  };

  const logout = () => {
    localStorage.removeItem("linkup_token");
    setToken(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      login,
      register,
      requestPasswordReset,
      confirmPasswordReset,
      logout,
    }),
    [user, token, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
