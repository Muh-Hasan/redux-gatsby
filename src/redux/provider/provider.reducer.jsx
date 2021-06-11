import PROVIDERS_DATA from "../../data/provider.data"

const INITIAL_STATE = PROVIDERS_DATA

const providerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default providerReducer
