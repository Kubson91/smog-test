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
          <a href="/">Smog Test</a>
        </li>
        <li>
          <a href="/">Czym jest Smog?</a>
        </li>
        <li>
          <a href="/">Porady</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
