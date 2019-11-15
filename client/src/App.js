import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubble-page">
            <Route exact path="/bubble-page" component={BubblePage} />
            {/* <BubblePage /> */}
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
