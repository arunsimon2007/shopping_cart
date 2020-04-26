import * as types from "./types"

const initialState = { listSearch: "", cartSearch: "" }

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST_SEARCH: {
      return { ...state, listSearch: action.payload }
    }
    case types.SET_CART_SEARCH: {
      return { ...state, cartSearch: action.payload }
    }
    default:
      return state
  }
}

export default headerReducer
