import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ path, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        //  not logged in so redirect to login page
        // if (!userActions.isLoggedIn) return <Redirect to="/login" />;
        // authorised so return component
        return <Component {...rest} />;
      }}
    />
  );
}
