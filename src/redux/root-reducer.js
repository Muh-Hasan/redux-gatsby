import { combineReducers } from "redux"

import providerReducer from "./provider/provider.reducer"
import articleReducer from "./article/article.reducer"

// const rootReducer = ({
//     provider: providerReducer,
//     article: articleReducer
// })

export default combineReducers({
  provider: providerReducer,
  article: articleReducer,
})
