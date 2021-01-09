import * as types from "../types"

export function getProducts(products) {
  return {
    type: types.GET_PRODUCTS,
    payload: products
  }
}
