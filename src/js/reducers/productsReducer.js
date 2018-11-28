import {
	FETCH_PRODUCTS_START,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE
} from '../constants/types';

const initialState = {
	template: null,
	products: [],
	loading: false,
	error: null,
};

export default function productsReducer(state = initialState, action) {
	switch ( action.type ) {
		case FETCH_PRODUCTS_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				template: action.payload.template,
				products: action.payload.products,
			};

		case FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};

		default:
			return state;
	}
}