import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "mech001",
    role: "user", // 'user' | 'mechanic' | 'admin'
    isLoggedIn: true,
  });

  const changeRole = (role) => {
    setUser((prev) => ({ ...prev, role }));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, changeRole }}>
      {children}
    </AuthContext.Provider>
  );
};
