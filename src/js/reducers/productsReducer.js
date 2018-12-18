import * as types from '../constants/types';

const initialState = {
	template: null,
	products: [],
	loading: false,
	error: null,
};

export default function productsReducer(state = initialState, action) {
	switch ( action.type ) {
		case types.FETCH_PRODUCTS_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				template: action.payload.template,
				products: action.payload.products,
			};

		case types.FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};

		default:
			return state;
	}
}