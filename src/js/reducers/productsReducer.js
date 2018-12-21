import * as types from '../constants/types';

const initialState = {
  template: null,
  tempId: null,
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
        products: [],
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      let templateId = action.payload.tempId;
      let templateWrap = action.payload.template.filter(i => templateId === i.id);
      let template = templateWrap[0].template;
      return {
        ...state,
        loading: false,
        tempId: templateId,
        products: action.payload.products,
        template: template,
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