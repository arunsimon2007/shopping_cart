import * as types from "./types"

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CART_ITEMS: {
      return state
    }
    case types.ADD_CART_ITEM: {
      return state.indexOf(action.payload) == -1
        ? [...state, action.payload]
        : [...state]
    }
    case types.REMOVE_CART_ITEM: {
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ]
      return state
    }

    case types.INCREMENT_COUNT: {
      return state.map((item, i) => {
        if (action.payload !== i) return item
        return {
          ...item,
          ...item.count++,
        }
      })
    }
    case types.DECREMENT_COUNT: {
      return state.map((item, i) => {
        if (action.payload !== i) return item
        return {
          ...item,
          ...(item.count > 1 ? item.count-- : item.count),
        }
      })
    }
    default:
      return state
  }
}

export default cartReducer
