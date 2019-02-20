import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  handleChange(e) {
    console.log(this);
  }
  //handleChange = this.handleChange.apply(this);
  render() {
    return <input type="text" onChange={this.handleChange} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
