import { useMemo } from 'react'
import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers/";
import { composeWithDevTools } from 'redux-devtools-extension'
import initialState from "./initialState";


//TODO Продолжить правки стора

let store

function configureStore(initState = initialState) {
	return createStore(
		createRootReducer(),
		initState,
		composeWithDevTools(applyMiddleware())
	);
}

export const initializeStore = (initialState) => {
	let _store = store ?? configureStore(initialState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (initialState && store) {
		_store = configureStore({
			...store.getState(),
			...initialState,
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return _store
}

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}


