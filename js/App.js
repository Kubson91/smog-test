import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation/Navigation";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Titles from "./components/CheckAir/Titles";
import Form from "./components/CheckAir/Form";
import AirConditions from "./components/CheckAir/AirConditions";

import "./App.scss";

document.addEventListener("DOMContentLoaded", function() {
  class App extends React.Component {
    state = {
      sideDrawerOpen: false,
      latitude: null,
      longitude: null,
      value: null,
      level: null,
      description: null,
      color: null,
      advice: null
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

    getAirConditions = e => {
      e.preventDefault();
      const api_key = "102f9ddefd0d47ba8f5bf262e6ebd368";
      const address = e.target.elements.address.value;
      if (e.target.elements.address.value === " ") {
        return alert("Wprowadź nazwę miasta i ulicę");
      } else {
        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${api_key}`
        )
          .then(resp => {
            return resp.json();
          })
          .then(obj => {
            console.log(obj);

            this.setState({
              latitude: obj.results[0].geometry.lat,
              longitude: obj.results[0].geometry.lng
            });
          });

          setTimeout(() => {
        const latitude = this.state.latitude;
        const longitude = this.state.longitude;
        fetch(
          `https://airapi.airly.eu/v2/measurements/nearest?indexType=AIRLY_CAQI&lat=${latitude}&lng=${longitude}&maxDistanceKM=5`,
          {
            headers: {
              Accept: "application/json",
              Apikey: "qhjP7AWFJ844LSAenROBTMafI0xnQCzk"
            }
          }
        )
          .then(resp => {
            return resp.json();
          })
          .then(obj => {
            console.log(obj);
            this.setState({
              value: obj.current.indexes[0].value,
              level: obj.current.indexes[0].level,
              description: obj.current.indexes[0].description,
              color: obj.current.indexes[0].color,
              advice: obj.current.indexes[0].advice
            });
          });
        },2000)
      }
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
            <Titles />
            <Form getAirConditions={this.getAirConditions} />
            <AirConditions value={this.state.value} level={this.state.level} description={this.state.description} color={this.state.color} advice={this.state.advice} />
          </main>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("app"));
});
