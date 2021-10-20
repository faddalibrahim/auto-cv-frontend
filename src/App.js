// libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Error404 from "./pages/errors/Error404/Error404";
import Protected from "./components/protected/Protected";

// styles

// utils

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Protected exact path="/" />
            <Route path="/home" component={Home} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
