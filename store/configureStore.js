import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers/";
import { composeWithDevTools } from 'redux-devtools-extension'


function configureStore(initState) {
	const store = createStore(
		createRootReducer(),
		initState,
		composeWithDevTools(applyMiddleware())
	);

	return store;
}

export default configureStore;