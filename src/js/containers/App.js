import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./Home/Home"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import NotFound from "../components/NotFound/NotFound"

const App = () => {
	return (
		<div className="container">
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/product/:id" render={props =>
					<ProductDetails {...props} />}/>
				<Route path="/404"
							 component={NotFound}/>
			</Switch>
		</div>
	);
};

export default App;