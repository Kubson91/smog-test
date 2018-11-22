import React from "react";

import "./SideDrawer.scss";

const sideDrawer = props => {
  let drawerClasses = "side__drawer";
  if (props.show) {
    drawerClasses = "side__drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="#air__conditions">SmogTest</a>
        </li>
        <li>
          <a href="#article1">Czym jest Smog?</a>
        </li>
        <li>
          <a href="#article2">Jak się chronić?</a>
        </li>
        <li>
          <a href="/">Walka ze smogiem</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
