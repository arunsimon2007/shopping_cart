import React from "react"
import SelectedProduct from "../components/selectedProduct/"
import PropTypes from "prop-types"
import classnames from "classnames"

import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import { cartActions } from "../redux/reducers/cart/"
import "./shoppingCart.module.scss"
const ShoppingCart = (props) => {
  const priceDetails = {
    totalActual: 0,
    totalDisplay: 0,
    totalDiscount: 0,
    totalCount: 0,
  }
  props.products.forEach((product) => {
    priceDetails.totalActual =
      priceDetails.totalActual + product.price.actual * product.count
    priceDetails.totalDisplay =
      priceDetails.totalDisplay + product.price.display * product.count
    priceDetails.totalDiscount =
      priceDetails.totalDisplay - priceDetails.totalActual
    priceDetails.totalCount = priceDetails.totalCount + product.count
  })

  let data =
    props.products &&
    props.products.filter((product) =>
      product.name.toLowerCase().startsWith(props.searchWord.toLowerCase())
    )
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
      className={classnames(
        "shoppingCart",
        !props.products.length ? "empty" : ""
      )}
    >
      {!!props.products.length && (
        <Grid item xs={12} sm={8}>
          {data &&
            data.map((item, i) => (
              <Grid key={i} item xs={12}>
                <SelectedProduct
                  index={i}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  remove={props.removeFromCart}
                  count={item.count}
                  increment={props.incrmentCount}
                  decrement={props.decrementCount}
                />
              </Grid>
            ))}
        </Grid>
      )}
      {!!props.products.length && (
        <Grid item xs={12} sm={4}>
          <Grid container className={"cartInfo"}>
            <Grid item xs={12} className={"title"}>
              <span>PRICE DETAILS</span>
            </Grid>
            <Grid item xs={12} className={"priceItem"}>
              <span>Price item {`(${priceDetails.totalCount})`} :</span>

              <span>{priceDetails.totalDisplay}</span>
            </Grid>
            <Grid item xs={12} className={"discount"}>
              <span>Discount :</span> <span>{priceDetails.totalDiscount}</span>
            </Grid>
            <Grid item xs={12} className={"totalPayable"}>
              <span>Total Payable :</span>

              <span>{priceDetails.totalActual}</span>
            </Grid>
          </Grid>
        </Grid>
      )}
      {!props.products.length && (
        <Grid item xs={12}>
          <span>CART IS EMPTY!!</span>
        </Grid>
      )}
    </Grid>
  )
}

ShoppingCart.propTypes = {
  products: PropTypes.array,
}
ShoppingCart.defaultProps = {
  products: [],
}
const mapStateToProps = (state) => {
  return {
    products: state.shoppingCart,
    searchWord: state.header.cartSearch,
  }
}

export default connect(mapStateToProps, {
  removeFromCart: cartActions.removeCartItem,
  incrmentCount: cartActions.incrementCount,
  decrementCount: cartActions.decrementCount,
})(ShoppingCart)
