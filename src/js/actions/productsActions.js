import {
	FETCH_PRODUCTS_START,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE
} from '../constants/types';

export const fetchProductsStart = () => ({
	type: FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products, template) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: { template, products }
});

export const fetchProductsFailure = error => ({
	type: FETCH_PRODUCTS_FAILURE,
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

