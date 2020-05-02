import React from "react"
import { Grid, Button } from "@material-ui/core"
import * as cartTypes from "../../redux/reducers/cart/types"
import "./product.module.scss"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  productButton: {
    backgroundColor: "orange",
    color: "black",
    padding: "5px 10px",
    margin: "10px",
    borderRadius: "20px",
  },
})
const Product = (props) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      className={"productContainer"}
    >
      <Grid item className={"productImage"}>
        <img alt={props.name} src={props.image} height="50%" width="50%" />
      </Grid>
      <Grid item xs={12} className={"name"}>
        <span>{props.name}</span>
      </Grid>
      <Grid item>
        <span className={"actual"}>&#8377;{props.actual}</span>
        <span className={"display"}>{props.display}</span>
        <span className={"discount"}>{props.discount}%off</span>
      </Grid>
      <Grid item className={"button"}>
        <Button
          className={classes.productButton}
          onClick={() => {
            props.cartItemList.indexOf(props.productNo) == -1
              ? props.add({
                  productNo: props.productNo,
                  count: 1,
                  name: props.name,
                  image: props.image,
                  price: { actual: props.actual, display: props.display },
                  discount: props.discount,
                })
              : props.incrmentCount(props.productNo)
          }}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  )
}

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
  incrmentCount: PropTypes.func.isRequired,
  productNo: PropTypes.number.isRequired,
  cartItemList: PropTypes.array,
}

Product.defaultProps = {
  name: "",
  image: "",
  price: {},
  discount: "",
  productNo: 0,
  cartItemList: [],
}
export default Product
