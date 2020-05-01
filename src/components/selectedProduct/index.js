import React from "react"
import { Grid, Button } from "@material-ui/core"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import "./SelectedProduct.module.scss"

const useStyles = makeStyles({
  buttonStyle: {
    padding: "0px",
    fontWeight:"bold"
  },
})

const SelectedProduct = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={"selectedProduct"}
    >
      <Grid item xs={4}>
        <img
          alt={props.name}
          src={props.image}
          width={matches ? "30%" : "100%"}
        />
      </Grid>
      <Grid
        item
        xs={8}
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        className={"productDetails"}
      >
        <Grid item xs={12}>
          {props.name}
        </Grid>
        <Grid item xs={12} sm={4}>
          <span className={"actualPrice"}>{props.price.actual}</span>
          <span className={"displayPrice"}>{props.price.display}</span>
          <span className={"discount"}>{props.discount}%off</span>
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
          <Button
            onClick={() => props.remove(props.index)}
            className={classes.buttonStyle}
          >
            REMOVE
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

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
