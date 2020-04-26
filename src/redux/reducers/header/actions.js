import * as types from "./types"

export const setListSearchValue = (value) => ({
  type: types.SET_LIST_SEARCH,
  payload: value,
})

export const setCartSearchValue = (value) => ({
  type: types.SET_CART_SEARCH,
  payload: value,
})
