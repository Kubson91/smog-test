import React from "react";

import Form from "./Form";

import "./AirConditions.scss";

const airConditions = props => (
  <div id="air__conditions">
    <div className="form__section">
      <Form getAirConditions={props.getAirConditions} error={props.error} />
      <div className="airly__logo">
        <a href="https://airly.eu/pl/">
          <img src={require('../../../images/logo1.jpg')} alt="Airly Logo" />
        </a>
      </div>
    </div>

    <div className="air__conditions-info">
      <div className="results">
        <h2>Wynik:</h2>
        <h3>
          Indeks CAQI:
          <p>{props.value}</p>
        </h3>
        <h3>
          Poziom:
          <p style={{ color: props.color }}>{props.level}</p>
        </h3>
        <h3>
          Opis:
          <p>{props.description}</p>
        </h3>
        <h3>
          Porada:
          <p>{props.advice}</p>
        </h3>
      </div>
      <div className="legend">
        <h2>Czym jest CAQI?</h2>
        <p>
          W celu zaprezentoawnia informacji o jakości powietrza w miastach
          europejskich w sposób porównywalny i zrozumiały, wszystkie <br />{" "}
          szczegółowe pomiary są przekształcane w jedną liczbę : Wspólny Indeks
          Jakości Powietrza (CAQI)
        </p>
        <p style={{ color: "#7FB800" }}>0-50 - niski</p>
        <p style={{ color: "#FFB400" }}>51-75 - średni</p>
        <p style={{ color: "#B40001" }}>76-100 - wysoki</p>
        <p style={{ color: "#8E0804" }}>>100 - bardzo wysoki</p>
      </div>
    </div>
  </div>
);

export default airConditions;
