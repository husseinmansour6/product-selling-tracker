import * as types from "../types"

const initialState = {
  products: []
}

export default function products(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_PRODUCTS:
      console.log({ payload })
      return {
        ...state,
        products: payload
      }
    default:
      return state
  }
}
