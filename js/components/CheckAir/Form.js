import React from "react";

import "./Form.scss";

const form = props => (
  <div className="form">
    <div className="titles">
      <h1>Smog Test</h1>
      <h3>Sprawdź czy masz smoga w swoim mieście.</h3>
    </div>
    <form onSubmit={props.getAirConditions}>
      <input type="text" name="address" placeholder="Miasto, ulica..." />
      <div className="splitter"/>
      <button>Sprawdź</button>
      <h3>{props.error}</h3>
    </form>
  </div>
);

export default form;
