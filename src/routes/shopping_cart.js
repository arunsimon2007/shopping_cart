import React from "react"
import SelectedProduct from "../components/selectedProduct/"
import PropTypes from "prop-types"

import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import { cartActions } from "../redux/reducers/cart/"
import "./shoppingCart.module.scss"
const ShoppingCart = (props) => {
  let data =
    props.products &&
    props.products.filter((product) =>
      product.name.startsWith(props.searchWord)
    )
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={"shoppingCart"}
    >
      {data &&
        data.map((item, i) => (
          <Grid key={i} item xs={12}>
            <SelectedProduct
              index={i}
              name={item.name}
              image={item.image}
              price={item.price}
              remove={props.removeFromCart}
              count={item.count}
              increment={props.incrmentCount}
              decrement={props.decrementCount}
            />
          </Grid>
        ))}
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
