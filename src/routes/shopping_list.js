import React, { useState } from "react"
import SortFilter from "../components/sortfilter/"
import { Grid, Slider } from "@material-ui/core"

import Product from "../components/product/"
import data from "../../data.json"
import { connect } from "react-redux"
import { cartActions } from "../redux/reducers/cart/"

import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { sortFilterActions } from "../redux/reducers/sortFilter/"

import "./shoppingList.module.scss"

const ShoppingList = (props) => {
  let dataUpdated = { ...data }
  if (props.sort && (props.sort === "High" || props.sort === "Low")) {
    dataUpdated.items =
      props.sort === "High"
        ? dataUpdated.items.sort((a, b) => b.price.actual - a.price.actual)
        : dataUpdated.items.sort((a, b) => a.price.actual - b.price.actual)
  } else if (props.sort) {
    dataUpdated.items = dataUpdated.items.sort(
      (a, b) => a.discount - b.discount
    )
  }

  if (props.searchWord) {
    dataUpdated.items = dataUpdated.items.filter((item) =>
      item.name.toLowerCase().startsWith(props.searchWord.toLowerCase())
    )
  }

  if (props.filter) {
    dataUpdated.items = dataUpdated.items.filter(
      (item) => item.price.actual < props.filter
    )
  }

  const cartItemList = props.cartItems.map((item) => item.productNo)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const [sliderValue, setSliderValue] = useState(200)
  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
  }
  return (
    <Grid container>
      {matches && (
        <Grid
          item
          xs={false}
          sm={4}
          md={2}
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={"leftPan"}
        >
          <Grid item xs={12}>
            <h3>Filters</h3>
            <div className={"min-max"}>
              <span className={"min"}>&#8377;100</span>
              <span className={"max"}>&#8377;100000</span>
            </div>
            <Slider
              value={sliderValue}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              min={100}
              max={100000}
              valueLabelDisplay="off"
            />

            <button onClick={() => props.setFilterValue(sliderValue)}>
              Apply
            </button>
          </Grid>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={8}
        md={10}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={"rightPan"}
      >
        <SortFilter />
        {dataUpdated.items.map((item, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Product
              name={item.name}
              image={item.image}
              discount={item.discount}
              actual={item.price.actual}
              display={item.price.display}
              add={props.addtoCart}
              cartItemList={cartItemList}
              productNo={i}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  sort: state.sortFilter.sort,
  filter: state.sortFilter.filter,
  searchWord: state.header.listSearch,
  products: state.items,
  cartItems: state.shoppingCart,
})

export default connect(mapStateToProps, {
  addtoCart: cartActions.addCartItem,
  setFilterValue: sortFilterActions.setFilterValue,
})(ShoppingList)
