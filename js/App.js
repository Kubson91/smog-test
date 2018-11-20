import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation/Navigation";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import "./App.scss";

document.addEventListener("DOMContentLoaded", function() {
  class App extends React.Component {
    state = {
      sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };

    backdropClickHandler = () => {
      this.setState({
        sideDrawerOpen: false
      });
    };

    render() {
      let backdrop;

      if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />;
      }
      return (
        <div style={{ height: "100%" }}>
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "70px" }}>
            <p>Page Content</p>
          </main>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("app"));
});
