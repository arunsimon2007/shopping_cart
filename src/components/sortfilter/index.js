import React, { useState } from "react"

import { Grid, Modal } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSort, faFilter } from "@fortawesome/free-solid-svg-icons"
import "./sortfilter.module.scss"

const SortFilter = () => {
  const [open, setOpen] = useState(false)
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={"sortFilter"}
    >
      <Grid item xs={6} className={"sort"}>
        <span>sort</span>
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faSort} size="lg" color="#000" />
        </button>
      </Grid>
      <Grid item xs={6} className={"filter"}>
        <FontAwesomeIcon icon={faFilter} size="lg" color="#000" />
        <span>filter</span>
      </Grid>
      <Modal open={open} className={"modal"}>
        <div className={"modalBody"}>
          <ul>
            <li>
              <input type="radio" name="sort" value="high" />
              Price -- High Low
            </li>
            <li>
              <input type="radio" name="sort" value="low" />
              Price -- Low High
            </li>
            <li>
              <input type="radio" name="sort" value="discount" />
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
                <button onClick={() => setOpen(false)}>Cancel</button>
              </span>
            </Grid>
            <Grid item xs={6} className={"modalButton"}>
              <span>
                <button>Apply</button>
              </span>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </Grid>
  )
}
export default SortFilter
