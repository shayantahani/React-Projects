import React, { useState, useEffect, createContext } from "react";
import { authenticate } from "./firebase";
import { useHistory } from "react-router-dom";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    authenticate.onAuthStateChanged((person) => {
      setUser(person);
      setLoading(false);
      history.push("/chats");
    });
  }, [user, history]);
  return (
    <>
      <AuthContext.Provider value={user}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
