import BottomNav from "components/bottom-nav/BottomNav";
import Sidebar from "components/sidebar/Sidebar";
import Create from "pages/create/Create";
import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Sidebar />
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            paddingLeft: "5rem",
            backgroundColor: "#fafafa",
          }}
        >
          <Create />
        </div>
      </div>
    );
  }
}

export default Main;
