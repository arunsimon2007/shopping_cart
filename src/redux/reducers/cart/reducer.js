import * as types from "./types"

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CART_ITEMS: {
      return state
    }
    case types.ADD_CART_ITEM: {
      return { ...state, ...action.payload.item }
    }
    case types.REMOVE_CART_ITEM: {
      return {
        ...state.items.filter((item) => item.name !== action.payload.name),
      }
    }
    default:
      return state
  }
}

export default cartReducer
