import React from "react";

import "./Form.scss";

const form = props => (
  <div className="form">
    <form onSubmit={props.getAirConditions}>
      <input type="text" name="address" placeholder="Miasto, ulica..." />
      <button>Click</button>
    </form>
  </div>
);

export default form;
