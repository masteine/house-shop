import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./js/store/configStore";

import App from "./js/containers/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
	</Provider>,
	document.getElementById("root")
);
