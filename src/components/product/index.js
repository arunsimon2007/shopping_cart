import React from "react"
import { Grid, Button } from "@material-ui/core"
import * as cartTypes from "../../redux/reducers/cart/types"
import "./product.module.scss"
import PropTypes from "prop-types"
const Product = (props) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={"productContainer"}
  >
    <Grid item>
      <img alt={props.name} src={props.image} width="100%" />
    </Grid>
    <Grid item>{props.name}</Grid>
    <Grid item>
      {props.actual} - {props.display}
    </Grid>
    <Grid item>
      <Button
        color="secondary"
        onClick={() => {
          props.add({
            productNo: props.productNo,
            count: 1,
            name: props.name,
            image: props.image,
            price: { actual: props.actual, display: props.display },
          })
        }}
      >
        Add to Cart
      </Button>
    </Grid>
  </Grid>
)

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.shape({
    actual: PropTypes.number,
    display: PropTypes.number,
  }),
  discount: PropTypes.number,
  productNo: PropTypes.number,
  add: PropTypes.func.isRequired,
  productNo: PropTypes.number.isRequired,
}

Product.defaultProps = {
  name: "",
  image: "",
  price: {},
  discount: "",
  productNo: 0,
}
export default Product
