export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsStart = () => ({
	type: FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (tempId, products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: products,
	tempId: tempId,
});

export const fetchProductsFailure = error => ({
	type: FETCH_PRODUCTS_FAILURE,
	payload: error,
});

export default function fetchProducts(tempId) {
	return dispatch => {
		dispatch(fetchProductsStart());
		return fetch("http://localhost:3001/data")
			.then(handleErrors)
			.then(response => response.json())
			.then(json => {
				dispatch(fetchProductsSuccess(tempId, json));
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

