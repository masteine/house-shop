import * as types from '../constants/types';

export const fetchTemplatesStart = () => ({
	type: types.FETCH_TEMPLATES_START
});

export const fetchTemplatesSuccess = templates => ({
	type: types.FETCH_TEMPLATES_SUCCESS,
	payload: templates,
});

export const fetchTemplatesFailure = error => ({
	type: types.FETCH_TEMPLATES_FAILURE,
	payload: error,
});

export default function fetchTemplates() {
	return dispatch => {
		dispatch(fetchTemplatesStart());
		return fetch("http://localhost:3002/data")
			.then(handleErrors)
			.then(response => response.json())
			.then(json => {
				dispatch(fetchTemplatesSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchTemplatesFailure(error)));
	};
}

function handleErrors(response) {
	if ( !response.ok ) {
		throw Error(response.statusText);
	}
	return response;
}