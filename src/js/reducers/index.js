import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import templatesReducer from "./templatesReducer";

const rootReducer = combineReducers({
	productsReducer,
	templatesReducer,
});

export default rootReducer;

