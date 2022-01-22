import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

export const Store = createContext()

const initialState = {
	session: Cookies.get('SESSION') ? JSON.parse(Cookies.get('SESSION')) : null,
	pending: null
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SESSION':
			return {
				...state,
				session: action.payload
			}

		case 'PENDING':
			return {
				...state,
				pending: action.payload
			}

		default:
			return state
	}
}

const StoreProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	const value = { state, dispatch }

	return (
		<Store.Provider value={ value }>
			{ children }
		</Store.Provider>
	)
}

export default StoreProvider