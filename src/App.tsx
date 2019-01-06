import * as React from "react";
import Switch from "react-switch";
import "./App.css";

const a = "b";

import logo from "./logo.svg";

class App extends React.Component {
  public state = {
    checked: true
  };

  public handleChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render() {
    return (
      <div className="App">
        {a}
        <Switch checked={this.state.checked} onChange={this.handleChange} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
