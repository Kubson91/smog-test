import React from "react";

import "./AirConditions.scss";

const airConditions = props => (
  <div className="air__conditions">
    <p>Indeks CAQI: {props.value}</p>
    <p style={{ color: props.color }}>{props.level}</p>
    <p>{props.description}</p>
    <p>{props.advice}</p>
    <p>Legenda CAQI:</p>
    <p>0-50 – low</p>
    <p>51-75- moderate</p>
    <p>76-100 high</p>
    <p>>100 – very high</p>
  </div>
);

export default airConditions;
