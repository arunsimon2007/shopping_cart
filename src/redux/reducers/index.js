import { combineReducers } from "redux"

import { itemReducer } from "./items/"
import { cartReducer } from "./cart/"
export default combineReducers({ shoppingList: itemReducer, shoppingCart: cartReducer })
