import { ADD_TO_CART, ADD_TO_WISHLIST, DECREASE_FROM_CART, DELETE_FROM_BASKET, DELETE_FROM_WISHLIST, GET_PRODUCTS } from "../types/Types"

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

export const addToWishlist = (data) => {
  return {type: ADD_TO_WISHLIST, payload: data}
}

export const deleteFromWishlist = (id) => {
  return {type: DELETE_FROM_WISHLIST, payload: id}
}