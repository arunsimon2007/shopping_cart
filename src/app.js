import React, { Component } from "react"
import ReactDOM from "react-dom"

import ShoppingList from "./routes/shopping_list"
import ShoppingCart from "./routes/shopping_cart"
import NoMatch from "./components/noMatch"
import Layout from "./components/layout/"

import { Provider } from "react-redux"
import getStore from "./redux/store"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles.scss"

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={ShoppingList} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route path={"*"} component={NoMatch} />
        </Switch>
      </Layout>
    )
  }
}

ReactDOM.render(
  <Router>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
)
