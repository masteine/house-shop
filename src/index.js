import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./js/store/configStore";

import App from "./js/containers/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import { Router } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App/>
		</Router>
	</Provider>,
	document.getElementById("root")
);
