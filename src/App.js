import React, { Component } from "react";
// Routes
import Router from "./Router";
// Components
import Template from "./components/Template";

class App extends Component {
  render() {
    return (
      <Template>
        <Router />
      </Template>
    );
  }
}

export default App;
