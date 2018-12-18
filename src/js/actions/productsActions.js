import * as types from '../constants/types';

export const fetchProductsStart = () => ({
	type: types.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products, template) => ({
	type: types.FETCH_PRODUCTS_SUCCESS,
	payload: { template, products }
});

export const fetchProductsFailure = error => ({
	type: types.FETCH_PRODUCTS_FAILURE,
	payload: error,
});

export default function fetchProducts(template) {
	return dispatch => {
		dispatch(fetchProductsStart());
		return fetch("http://localhost:3001/data")
			.then(handleErrors)
			.then(response => response.json())
			.then(json => {
				dispatch(fetchProductsSuccess(json, template));
				return json;
			})
			.catch(error => dispatch(fetchProductsFailure(error)));
	};

}

function handleErrors(response) {
	if ( !response.ok ) {
		throw Error(response.statusText);
	}
	return response;
}

