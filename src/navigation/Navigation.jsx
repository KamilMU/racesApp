import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "../App.jsx";
import Races from "../components/Races.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <PrivateRoute exact path="/races" component={Races} />
        <Route exact path="*" render={() => <div>- 404 Error Path- </div>} />
      </Switch>
    </Router>
  );
}
