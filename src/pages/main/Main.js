import BottomNav from "components/bottom-nav/BottomNav";
import Sidebar from "components/sidebar/Sidebar";
import Create from "pages/create/Create";
import { Component } from "react";

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
    this.setState({ currentRoute: routeName });
  };

  render() {
    console.log(this.props.history);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Sidebar
          setCurrentRoute={this.setCurrentRoute}
          currentRoute={this.state.currentRoute}
        />
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            paddingLeft: "5rem",
            backgroundColor: "#fdfdfd",
          }}
        >
          {mainPages[this.state.currentRoute]}
          {/* <Create /> */}
        </div>
      </div>
    );
  }
}

export default Main;
