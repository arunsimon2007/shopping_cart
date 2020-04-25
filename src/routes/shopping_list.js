import React from "react"
import SortFilter from "../components/sortfilter/"
import Grid from "@material-ui/core/Grid"
import Product from "../components/product/"
import data from "../../data.json"
import { connect } from "react-redux"
import { cartActions } from "../redux/reducers/cart/"
const ShoppingList = (props) => {
  return (
    <Grid container>
      <SortFilter />
      {data.items.map((item, i) => (
        <Grid key={i} item xs={6}>
          <Product
            name={item.name}
            image={item.image}
            discount={item.discount}
            actual={item.price.actual}
            display={item.price.display}
            add={props.addtoCart}
            productNo={i}
          />
        </Grid>
      ))}
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  products: state.items,
})

export default connect(mapStateToProps, {
  addtoCart: cartActions.addCartItem,
})(ShoppingList)
