import * as types from "./types"

export const getCartItems = () => ({ type: types.GET_ALL_CART_ITEMS })
export const addCartItem = (item) => ({
  type: types.REMOVE_CART_ITEM,
  payload: { item: item },
})
export const removeCartItem = (index) => ({
  type: types.REMOVE_CART_ITEM,
  payload: {
    name: name,
  },
})
