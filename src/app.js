import React, { Component } from "react"
import ReactDOM from "react-dom"

import ShoppingList from "./routes/shopping_list"
import ShoppingCart from "./routes/shopping_cart"
import NoMatch from "./components/noMatch"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles.scss"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ShoppingList} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route path={"*"} component={NoMatch} />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
