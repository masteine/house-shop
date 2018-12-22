import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Product from "./Product"

const App = ({ match }) => {

	return (
		<Router>
			<Switch>
				<div className="container app-container">
					<Route path="/" component={Home} exact/>
					<Route path="/product-details"
								 render={props => <Product product={match} {...props} />}
					/>
				</div>
			</Switch>
		</Router>
	);
};

export default App