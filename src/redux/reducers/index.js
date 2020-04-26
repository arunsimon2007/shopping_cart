import { combineReducers } from "redux"

import { itemReducer } from "./items/"
import { cartReducer } from "./cart/"
import { sortFilterReducer } from "./sortFilter/"
import { headerReducer } from "./header/"
export default combineReducers({
  shoppingList: itemReducer,
  shoppingCart: cartReducer,
  sortFilter: sortFilterReducer,
  header: headerReducer,
})
