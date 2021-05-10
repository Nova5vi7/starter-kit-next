import actionTypes from "./action-types";

const setProducts = (products) => ({
	type: actionTypes.SET_PRODUCTS,
	payload: {
		products,
	},
});

export default setProducts;