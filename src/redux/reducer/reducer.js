import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DECREASE_FROM_CART,
  DELETE_FROM_BASKET,
  DELETE_FROM_WISHLIST,
  GET_PRODUCTS,
} from "../types/Types";

const initialValue = {
  products: [],
  singleProduct: {},
  wishlist: [],
  cart: [],
};

const Reducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_CART: {
      const findItem = state.cart?.find((el) => el.id === action.payload.id);
      if (findItem) {
        return {
          ...state,
          cart: state.cart.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case DELETE_FROM_BASKET:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };

    case DECREASE_FROM_CART:
      const findItem = state.cart?.find((el) => el.id === action.payload);
      if (findItem.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((el) => {
            return el.id === action.payload
              ? { ...el, quantity: el.quantity - 1 }
              : el;
          }),
        };
      }
    case ADD_TO_WISHLIST:
      const findWishlistItem = state.wishlist.find(
        (el) => el.id === action.payload.id
      );
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, liked: true }],
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((el) => el.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default Reducer;
