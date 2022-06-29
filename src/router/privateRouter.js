import React from "react";
import { Navigate } from "react-router-dom";
import { Routes } from "./routes";
import { Access } from "./access";
import { LocalStorageKeys } from "../utils";
import { AuthContext } from "../App.auth";

const PrivateRoute = ({ path, children, ...rest }) => {
  const { userData } = React.useContext(AuthContext);

  const isAuthenticated = (path) => {
    if (localStorage.getItem(LocalStorageKeys.token)) {
   
      const _ = Access(userData?.role, path);
      if (_ >= 0) {
        return true;
      } else {
        alert("This user not have a access");
        localStorage.clear();
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      {isAuthenticated(path) ? (
        children
      ) : (
        <Navigate to={Routes.register} state={{ from: path }} />
      )}
    </>
  );
};

export default PrivateRoute;
