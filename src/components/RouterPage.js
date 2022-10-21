import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Company from "./Company";
import Live from './Live';
import Invite from "./Invite";
import Home from "./Home";
import Settlement from "./Settlement"
import Search from "./Search";
import Quick from "./Quick";

function RouterPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/live" component={Live} />
        <Route exact path="/settlement" component={Settlement} />
        <Route exact path="/quick" component={Quick} />
      </Switch>
    </Router>
  );
}

export default RouterPage;
