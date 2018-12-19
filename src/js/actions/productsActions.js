import * as types from '../constants/types'
import { store } from "../store/configStore"

export const fetchProductsStart = () => ( {
  type: types.FETCH_PRODUCTS_START
} );

export const fetchProductsSuccess = (products, tempId, template) => ( {
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: { products, tempId, template }
} );

export const fetchProductsFailure = error => ( {
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: error,
} );

export default function fetchProducts(tempId) {
  return dispatch => {
    const template = store.getState().templatesReducer.templates;
    dispatch(fetchProductsStart());
    return fetch("https://api.myjson.com/bins/13s2wg")
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.data, tempId, template));
        return json;
      })
      .catch(error =>
        dispatch(fetchProductsFailure(error)));
  };
}

function handleErrors(response) {
  if ( !response.ok ) {
    throw Error(response.statusText);
  }
  return response;
}

