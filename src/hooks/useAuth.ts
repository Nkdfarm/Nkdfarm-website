import { useEffect, useState } from "react";

const VALID_USERNAME = "notion";
const VALID_PASSWORD = "barlands";
const AUTH_COOKIE_NAME = "notion_ai_authenticated";

const hasAuthCookie = () =>
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie === `${AUTH_COOKIE_NAME}=true`);

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => hasAuthCookie());
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsAuthenticated(hasAuthCookie());
  }, []);

  const signIn = (username: string, password: string) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      document.cookie = `${AUTH_COOKIE_NAME}=true; path=/; SameSite=Lax`;
      setIsAuthenticated(true);
      setError(false);
      return true;
    }

    setError(true);
    return false;
  };

  const signOut = () => {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
    setIsAuthenticated(false);
    setError(false);
  };

  return { isAuthenticated, error, signIn, signOut };
}