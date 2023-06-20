import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
      if(user) navigate("/chats");
    })
  }, [user, navigate]);

  const value = { user }


  return (
    <AuthContext.Provider value={value}>
      {!isloading && children}
    </AuthContext.Provider>
  );
};
