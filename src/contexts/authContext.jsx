import React, { createContext, useState } from "react";

const AuthContext = createContext();
const initialState = {
  token: "",
  user: "",
};

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(initialState);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
