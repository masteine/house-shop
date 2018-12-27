import React from "react"

import Home from "./Home"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = match => {

	return (
		<Router>
			<div className="container">
				<Switch>
					<Route component={Home} exact/>
					<Route path="/product/"
								 {match}
								 component={ProductDetails}/>
				</Switch>
			</div>
		</Router>
	);

};

export default App;