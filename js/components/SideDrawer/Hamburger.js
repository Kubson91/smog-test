import React from "react";

import "./Hamburger.scss";

const hamburger = props => (
  <button className="hamburger__button" onClick={props.click}>
    <div className="hamburger__line" />
    <div className="hamburger__line" />
    <div className="hamburger__line" />
  </button>
);

export default hamburger;
