import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Product from "./Product"

const App = () => {
	return (
		<Router>
			<Switch>
				<div className="container app-container">
					<Route path="/" component={Home} exact/>
					<Route path="/product-details"
								 render={props => <Product {...props} />}
					/>
				</div>
			</Switch>
		</Router>
	);
};

export default App