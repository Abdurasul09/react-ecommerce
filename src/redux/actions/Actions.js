import { ADD_TO_CART, DECREASE_FROM_CART, DELETE_FROM_BASKET, GET_PRODUCTS } from "../types/Types"

export const getProducts = (data) => {
  return{type: GET_PRODUCTS, payload: data}
}

export const addCart = (data) => {
  return{type: ADD_TO_CART, payload: data}
}

export const incCartItem = (data) => {
  return {type: ADD_TO_CART, payload: data}
}
export const decCartItem = (id) => {
  return {type: DECREASE_FROM_CART, payload: id}
}

export const deleteFromCart = (id) => {
  return {type: DELETE_FROM_BASKET, payload: id}
}