const products = (state = {}, action) => {
	switch (action.type) {
		case "@/PRODUCTS/SET_PRODUCTS":
			return { ...state, ...action.products }

		default:
			return state;
	}
};

export default products;