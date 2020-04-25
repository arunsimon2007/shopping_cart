import * as types from "./types"

const initialState = { products: [{ name: "Item 1" }, { name: "Item 2" }] }

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS: {
      return state
    }
    default:
      return state
  }
}

export default itemReducer
