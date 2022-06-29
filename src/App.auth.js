import React, { useState, useEffect, createContext } from "react";
import CryptoJS from "crypto-js";
import { config } from "./config";
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("token");
    if (data) {
      let bytes = CryptoJS.AES.decrypt(data, config?.secret_key);
      let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setUserData(decryptedData);
    }
  }, []);

  const AuthUpdate = (data) => {
    setUserData(data);
  };
  return (
    <AuthContext.Provider value={{ userData, AuthUpdate }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
