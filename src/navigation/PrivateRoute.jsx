import React from 'react';
import { Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authed = localStorage.getItem("authed");

  return (
    authed === "true" && (
      <Route {...rest} render={(props) => <Component {...props} />} />
    )
  );
}
