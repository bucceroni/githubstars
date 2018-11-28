import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import SearchPage from "./containers/SearchPage";
import ResultPage from "./containers/ResultPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/result/:search" exact component={ResultPage} />
    </Switch>
  </BrowserRouter>
);
export default Router;
