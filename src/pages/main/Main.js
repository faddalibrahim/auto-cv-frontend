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
        style={{ width: "100vw", display: "flex", flexFlow: "column-reverse" }}
      >
        {/* <Sidebar /> */}
        <BottomNav />
        <div style={{ flexGrow: "1" }}>
          <Create />
        </div>
      </div>
    );
  }
}

export default Main;
