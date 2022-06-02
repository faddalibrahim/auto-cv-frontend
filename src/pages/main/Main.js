import { Component } from "react";
import Sidebar from "components/sidebar/Sidebar";

// styles
import MainStyles from "./main.module.scss";

import mainPages from "./main-pages";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: "create",
    };
  }

  setCurrentRoute = (routeName) => {
    if (routeName === "logout") {
      localStorage.removeItem("auto-cv-token");
      window.location.reload();
    }
    this.setState({ currentRoute: routeName });
  };

  render() {
    return (
      <div className={MainStyles.wrapper}>
        <Sidebar
          setCurrentRoute={this.setCurrentRoute}
          currentRoute={this.state.currentRoute}
        />
        <div className={MainStyles.mainPages}>
          {mainPages[this.state.currentRoute]}
        </div>
      </div>
    );
  }
}

export default Main;
