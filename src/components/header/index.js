import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import "./header.module.scss"

import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Header = (props) => {
  return (
    <Fragment>
      <Grid item>
        <Link to="/">
          <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
        </Link>
      </Grid>
      <Grid item className={"cart"}>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
        </Link>
        <div className={"count"}>{props.selectedProducts.length}</div>
      </Grid>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  selectedProducts: state.shoppingCart,
})

export default connect(mapStateToProps, null)(Header)
