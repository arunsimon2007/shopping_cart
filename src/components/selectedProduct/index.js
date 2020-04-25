import React from "react"
import { Grid, Button } from "@material-ui/core"
import PropTypes from "prop-types"
import "./SelectedProduct.module.scss"

const SelectedProduct = (props) => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={6}>
      <img alt={props.name} src={props.image} width="100%" />
    </Grid>
    <Grid
      item
      xs={6}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>{props.name}</Grid>
      <Grid item>
        {props.price.actual}-{props.price.display}
      </Grid>
      <Grid item>
        <button
          className={"counterIncrement"}
          onClick={() => props.increment(props.index)}
        >
          +
        </button>
        <span className={"counter"}>{props.count}</span>
        <button
          className={"counterDecrement"}
          onClick={() => props.decrement(props.index)}
        >
          -
        </button>
      </Grid>
      <Grid item>
        <Button onClick={() => props.remove(props.index)}>REMOVE</Button>
      </Grid>
    </Grid>
  </Grid>
)

SelectedProduct.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.object,
  count: PropTypes.number,
  remove: PropTypes.func,
}
SelectedProduct.defaultProps = {
  name: "",
  image: "",
  price: {},
}
export default SelectedProduct
