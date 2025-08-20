import { createContext, useContext, useState } from "react";

// Create a Context for Authentication
const AuthContext = createContext();

// Custom hook to access the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the application and provide auth state
export const AuthProvider = ({ children }) => {
  // Initialize user state (null means not logged in)
  const [user, setUser] = useState(null);

  // Login function to set user state
  const login = (userData) => {
    setUser(userData); // Set user data when logging in
    // You could store the user data in localStorage or cookies if needed
  };

  // Logout function to reset user state
  const logout = () => {
    setUser(null); // Reset user state when logging out
    // You could also remove user data from localStorage or cookies here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
