import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { headerActions } from "../../redux/reducers/header/"
import { withRouter, useLocation } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import "./header.module.scss"

import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Header = (props) => {
  let { pathname } = useLocation()

  return (
    <Fragment>
      <Grid item>
        <Link to="/">
          <FontAwesomeIcon icon={faStar} size="lg" color="yellow" />
        </Link>
      </Grid>
      <Grid item>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder={" Search "}
            autoComplete="off"
            onChange={(e) => {
              pathname === "/"
                ? props.setSearchValueList(e.target.value)
                : props.setSearchValueCart(e.target.value)
            }}
          />
        </form>
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

export default withRouter(
  connect(mapStateToProps, {
    setSearchValueList: headerActions.setListSearchValue,
    setSearchValueCart: headerActions.setCartSearchValue,
  })(Header)
)
