import React from "react"

import Grid from "@material-ui/core/Grid"
import "./layout.module.scss"

import Header from "../header/"
import Footer from "../footer/"

import PropTypes from "prop-types"

const Layout = (props) => (
  <Grid container className={"layout"}>
    <Grid
      container
      item
      xs={12}
      direction="row"
      justify="space-between"
      alignItems="center"
      className={"headerContainer"}
    >
      <Header />
    </Grid>
    <Grid item xs={12} className={"contentContainer"}>
      {props.children}
    </Grid>
    <Grid
      container
      item
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
      className={"footerContainer"}
    >
      <Footer />
    </Grid>
  </Grid>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
