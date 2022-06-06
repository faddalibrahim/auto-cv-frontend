import { Component } from "react";
import Sidebar from "components/sidebar/Sidebar";

// styles
import MainStyles from "./main.module.scss";

import mainPages from "./main-pages";
class Main extends Component {
  static CURRENT_PAGE = "create";
  static LOGOUT = "logout";

  constructor(props) {
    super(props);
    this.state = {
      currentPage: Main.CURRENT_PAGE,
    };
  }

  setCurrentPage = (pageName) => {
    if (pageName === Main.LOGOUT) {
      localStorage.removeItem("auto-cv-token");
      window.location.reload();
    }
    this.setState({ currentPage: pageName });
  };

  render() {
    return (
      <div className={MainStyles.wrapper}>
        <Sidebar
          setCurrentPage={this.setCurrentPage}
          currentPage={this.state.currentPage}
        />
        <div className={MainStyles.mainPages}>
          {mainPages[this.state.currentPage]}
        </div>
      </div>
    );
  }
}

export default Main;
