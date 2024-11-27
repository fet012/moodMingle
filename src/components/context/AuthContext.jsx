import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const login = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
