import { createStore } from "redux"

import rootRuducer from "./reducers/"

export default function getStore() {
  const store = createStore(
    rootRuducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
