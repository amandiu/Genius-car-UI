// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Initial state without demoUser
  const [user, setUser] = useState({
    isLoggedIn: true,    // false = guest
    role: "mechanic",    // "guest" | "user" | "mechanic" | "admin"
    name: "John Doe",    // optional
    email: "john@example.com", // optional
  });

  const changeRole = (newRole) => {
    setUser((prev) => ({ ...prev, role: newRole }));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, changeRole }}>
      {children}
    </AuthContext.Provider>
  );
};
