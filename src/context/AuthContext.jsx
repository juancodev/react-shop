import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAPI } from "hooks/useAPI";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState([]);

  const logout = () => {
    console.log('logout');
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     //const user = await axios(`https://store-node-api.onrender.com/api/v1/users`);
  //     //setUserAuth(user.data);
  //   }
  //   getUser();
  //   // const user = useAPI.getUsers(`https://store-node-api.onrender.com/api`);
  // }, [])


  const authObject = { userAuth, setUserAuth, logout };

  return (
    <AuthContext.Provider value={authObject}>
      {children}
    </AuthContext.Provider>
  )

}

export { AuthProvider, AuthContext };