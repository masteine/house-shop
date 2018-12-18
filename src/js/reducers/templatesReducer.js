import * as types from '../constants/types';

const initialState = {
	templates: [],
	loading: false,
	error: null,
};

export default function templatesReducer(state = initialState, action) {
	switch ( action.type ) {
		case types.FETCH_TEMPLATES_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.FETCH_TEMPLATES_SUCCESS:
			return {
				...state,
				loading: false,
				templates: action.payload,
			};

		case types.FETCH_TEMPLATES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			};

		default:
			return state;
	}
}