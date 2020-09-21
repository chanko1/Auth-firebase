import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./Page";
import SignIn from "./SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/Page">
            <Page />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
