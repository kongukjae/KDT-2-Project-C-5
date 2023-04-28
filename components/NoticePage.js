import { Route, Switch } from "react-router-dom";
import React from "react";
function NoticePage() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/NoticePage">
          <NewPage />
        </Route>
      </Switch>
    </div>
  );
}

export default NoticePage;
