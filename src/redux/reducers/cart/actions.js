import * as types from "./types"

export const getCartItems = () => ({ type: types.GET_ALL_CART_ITEMS })
export const addCartItem = (item) => ({
  type: types.ADD_CART_ITEM,
  payload: item,
})
export const removeCartItem = (index) => ({
  type: types.REMOVE_CART_ITEM,
  payload: index,
})

export const incrementCount = (index) => ({
  type: types.INCREMENT_COUNT,
  payload: index,
})

export const decrementCount = (index) => ({
  type: types.DECREMENT_COUNT,
  payload: index,
})
