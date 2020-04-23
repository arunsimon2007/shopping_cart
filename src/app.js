import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.scss"

class App extends Component {
  render() {
    return <p className="hello">From App Component</p>
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
