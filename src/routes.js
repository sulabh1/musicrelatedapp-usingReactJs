import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/index";
import Artist from "./components/Artists/index";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/artist/:artistid" component={Artist} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
