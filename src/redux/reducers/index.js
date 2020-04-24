import { combineReducers } from "redux"

import { itemReducer } from "./items/"
import { cartReducer } from "./cart/"
export default combineReducers({ items: itemReducer, cart: cartReducer })
