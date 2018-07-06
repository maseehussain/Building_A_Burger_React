import React from "react";

import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerCLosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer closed={this.sideDrawerCLosedHandler} />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
