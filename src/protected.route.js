import React from "react";
import { Route, Redirect } from "react-router-dom";
//import auth from "./auth";

export const ProtectedRoute = ({ component, path, exact, key }) => {
  function auth() {
    if (localStorage.getItem("user") !== null) return true;
    return false;
  }

  return auth() ? (
    <Route key={key} path={path} exact={exact} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: "/admin",
      }}
    />
  );
};
