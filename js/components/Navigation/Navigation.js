import React from "react";

import Hamburger from "../SideDrawer/Hamburger";
import "./Navigation.scss";

const navigation = props => (
  <header className="navigation__header">
    <nav className="navigation">
      <div className="navigation__hamburger-button"><Hamburger click={props.drawerClickHandler} /></div>
      <div className="navigation__logo">
        <a href="/">Tu będzie Logo</a>
      </div>
      <div className="navigation__elements">
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
      </div>
    </nav>
  </header>
);

export default navigation;
