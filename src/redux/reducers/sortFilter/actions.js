import * as types from "./types"

export const setSortValue = (sort) => ({
  type: types.SET_SORT_VALUE,
  payload: sort,
})

export const setFilterValue = (filter) => ({
  type: types.SET_FILTER_VALUE,
  payload: filter,
})
