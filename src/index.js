import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./js/store/configStore";

import App from "./js/containers/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);
