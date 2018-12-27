import React from "react"

import Home from "./Home"
import ProductDetails from "./ProductDetails"
import { Route, Switch } from "react-router-dom";

const App = ({ match }) => {

	return (

		<div className="container">
			<Switch>
				<Route component={Home} exact/>
				<Route path="/product/:id"
							 render={props =>
								 <ProductDetails {match}
																 {...props} />}/>
			</Switch>
		</div>

	);

};

export default App;