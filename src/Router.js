import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import HelpPage from "./pages/HelpPage";
import ThirdPage from "./pages/ThirdPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/second" component={SecondPage} />
    <Route exact path="/help-page" component={HelpPage} />
    <Route exact path="/third" component={ThirdPage} />
  </Switch>
);

export default Router;
