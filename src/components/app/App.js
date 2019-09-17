import React from "react";

import Router from "../router";

import "./App.scss"

class App extends React.Component {
  render() {
    return (
        <div id="app" className="container">
            <Router/>
        </div>
    );
  }
}

export default App;