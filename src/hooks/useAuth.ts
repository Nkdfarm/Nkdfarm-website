import { useState } from "react";

const VALID_USERNAME = "notion";
const VALID_PASSWORD = "barlands";
const AUTH_COOKIE = "notion_ai_authenticated=true";

const hasAuthCookie = () => document.cookie.split("; ").includes(AUTH_COOKIE);

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthCookie);
  const [error, setError] = useState(false);

  const signIn = (username: string, password: string) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      document.cookie = `${AUTH_COOKIE}; path=/; SameSite=Lax`;
      setIsAuthenticated(true);
      setError(false);
      return true;
    }

    setError(true);
    return false;
  };

  const signOut = () => {
    document.cookie = "notion_ai_authenticated=; path=/; max-age=0; SameSite=Lax";
    setIsAuthenticated(false);
    setError(false);
  };

  return { isAuthenticated, error, signIn, signOut };
}