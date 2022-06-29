import React from "react";
import { Navigate } from "react-router-dom";
import { LoginSuccess } from "./access";
import { LocalStorageKeys } from "../utils";

const AuthRoute = ({ path, children, ...rest }) => {
  const isAuthenticated = (path) => {
    if (localStorage.getItem(LocalStorageKeys.authToken)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {isAuthenticated(path) ? (
        children
      ) : (
        <Navigate to={LoginSuccess(localStorage.getItem(LocalStorageKeys.userRole))} />
      )}
    </>
  );
};

export default AuthRoute;
