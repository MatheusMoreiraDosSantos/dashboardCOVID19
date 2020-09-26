import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Aboult from "./pages/Aboult";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboult" exact component={Aboult} />
      </Switch>
    </BrowserRouter>
  );
}
