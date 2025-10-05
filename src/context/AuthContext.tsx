"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // In src/context/AuthContext.tsx

  useEffect(() => {
    // THIS MUST BE localStorage.getItem
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      // You could validate the token here by making an API call
    }
    setLoading(false);
  }, []);

  // In src/context/AuthContext.tsx

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data);
        setToken(data.token);
        // THIS IS THE CRITICAL LINE. IT MUST BE localStorage.
        localStorage.setItem("token", data.token);
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
    }
  };

  // In src/context/AuthContext.tsx

  const logout = () => {
    setUser(null);
    setToken(null);
    // THIS MUST ALSO BE localStorage.
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
