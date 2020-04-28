import React, { useState, Fragment } from "react"
import classnames from "classnames"
import { Grid, Modal, Slider } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import { sortFilterActions } from "../../redux/reducers/sortFilter/"

import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons"
import "./sortfilter.module.scss"

import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const SortFilter = (props) => {
  const [sortOpen, setSortModal] = useState(false)
  const [filterOpen, setFilterModal] = useState(false)
  const [sliderValue, setSliderValue] = useState(200)
  const [sortValue, setSortValue] = useState("High")
  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
  }

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Fragment>
      {!matches && (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classnames("sortFilter")}
        >
          <Grid item xs={6} className={"sort"}>
            <span>sort</span>
            <button onClick={() => setSortModal(true)}>
              <FontAwesomeIcon icon={faSort} size="lg" color="#000" />
            </button>
          </Grid>
          <Grid item xs={6} className={"filter"}>
            <button onClick={() => setFilterModal(true)}>
              <FontAwesomeIcon icon={faFilter} size="lg" color="#000" />
            </button>
            <span>filter</span>
          </Grid>
          <Modal open={sortOpen} className={"modal"}>
            <div className={"modalBody"}>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="sort"
                    value="high"
                    onClick={() => setSortValue("High")}
                    defaultChecked={props.sort === "High" ? true : false}
                  />
                  Price -- High Low
                </li>
                <li>
                  <input
                    type="radio"
                    name="sort"
                    value="low"
                    onClick={() => setSortValue("Low")}
                    defaultChecked={props.sort === "Low" ? true : false}
                  />
                  Price -- Low High
                </li>
                <li>
                  <input
                    type="radio"
                    name="sort"
                    value="discount"
                    onClick={() => setSortValue("Discount")}
                    defaultChecked={props.sort === "Discount" ? true : false}
                  />
                  Discount
                </li>
              </ul>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={"modalButtons"}
              >
                <Grid item xs={6} className={"modalButton"}>
                  <span>
                    <button onClick={() => setSortModal(false)}>Cancel</button>
                  </span>
                </Grid>
                <Grid item xs={6} className={"modalButton"}>
                  <span>
                    <button
                      onClick={() => {
                        props.setSortValueAction(sortValue)
                        setSortModal(false)
                      }}
                    >
                      Apply
                    </button>
                  </span>
                </Grid>
              </Grid>
            </div>
          </Modal>
          <Modal open={filterOpen} className={"modal"}>
            <div className={"modalBody"}>
              <h3>Filter Options</h3>
              <div className={"sliderCongainer"}>
                <span className={"range"}>100</span>
                <Slider
                  defaultValue={100000}
                  value={sliderValue}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                  min={100}
                  max={100000}
                  className={"slider"}
                  valueLabelDisplay="on"
                />
                <span className={"range"}>10000</span>
              </div>
              <div className={"priceLabel"}>
                <span>Price</span>
              </div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={"modalButtons"}
              >
                <Grid item xs={6} className={"modalButton"}>
                  <span>
                    <button onClick={() => setFilterModal(false)}>
                      Cancel
                    </button>
                  </span>
                </Grid>
                <Grid item xs={6} className={"modalButton"}>
                  <span>
                    <button
                      onClick={() => {
                        props.setFilterValueAction(sliderValue)
                        setFilterModal(false)
                      }}
                    >
                      Apply
                    </button>
                  </span>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </Grid>
      )}
      {matches && (
        <Grid container>
          <Grid item>
            <ul className={"sortMenu"}>
              <li className={"label"}>Sort By</li>
              <li onClick={() => props.setSortValueAction("High")}>
                Price -- High Low
              </li>
              <li onClick={() => props.setSortValueAction("Low")}>
                Price -- Low High
              </li>
              <li onClick={() => props.setSortValueAction("Discount")}>
                Discount
              </li>
            </ul>
          </Grid>
        </Grid>
      )}
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    sort: state.sortFilter.sort,
    filter: state.sortFilter.filter,
  }
}
export default connect(mapStateToProps, {
  setSortValueAction: sortFilterActions.setSortValue,
  setFilterValueAction: sortFilterActions.setFilterValue,
})(SortFilter)
