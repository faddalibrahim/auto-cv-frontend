// libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Error404 from "./pages/errors/Error404/Error404";
import Protected from "./pages/protected/Protected";
import Playground from "pages/playground/Playground";

import Main from "pages/main/Main";

// styles
import AppStyles from "css/app.module.scss";

// utils
import { HOME, PLAYGROUND, MAIN } from "utils/routes";
import ResumeSheet from "components/resume-sheet/ResumeSheet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={AppStyles.app}>
        <Router>
          <Switch>
            <Protected exact path="/" />
            <Route path={`${HOME}`} component={Home} />
            <Route path={`${PLAYGROUND}`} component={Playground} />
            <Route path="/print" component={ResumeSheet} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
