const initialValue = {
	products: [],
	singleProduct:{},
	wishlist: []
}

const Reducer = (state = initialValue, action) => {
  switch (action.payload){
		case "GET_PRODUCTS":
			return{...state, products: action.payload}
		default:
			return state
	}
}

export default Reducer;