import * as types from "./types"

const initialState = { sort: "", filter: "" }

const sortFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SORT_VALUE: {
      return { ...state, sort: action.payload }
    }
    case types.SET_FILTER_VALUE: {
      return { ...state, filter: action.payload }
    }
    default:
      return state
  }
}

export default sortFilterReducer
