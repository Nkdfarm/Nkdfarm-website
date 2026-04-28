import { useState } from "react";

const VALID_USERNAME = "notion";
const VALID_PASSWORD = "barlands";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const signIn = (username: string, password: string) => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
      return true;
    }

    setError(true);
    return false;
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setError(false);
  };

  return { isAuthenticated, error, signIn, signOut };
}