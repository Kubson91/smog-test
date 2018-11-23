import React from "react";

import Hamburger from "../SideDrawer/Hamburger";
import "./Navigation.scss";

const navigation = props => (
  <header className="navigation__header">
    <nav className="navigation">
      <div className="navigation__hamburger-button">
        <Hamburger click={props.drawerClickHandler} />
      </div>
      <div className="navigation__logo">
        <a href="/">
          <img
            src={require('../../../images/smog-test-logo.png')}
            alt="SmogTest Logo"
          />
        </a>
      </div>
      <div className="navigation__elements">
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
            <a href="#article3">Walka ze smogiem</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navigation;
