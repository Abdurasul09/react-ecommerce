import { GET_PRODUCTS } from "../types/Types"

export const getProducts = (data) => {
  return{type: GET_PRODUCTS, payload: data}
}