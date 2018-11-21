import React, { Component } from "react";
import { connect } from "react-redux";
import fetchProducts from "../actions/productsActions";

import ProductList from '../components/ProductList'
import Loader from '../components/Loader'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(fetchProducts());
	}

	render() {
		const { products, loading, error } = this.props;

		if ( error ) {
			return <div>Error!</div>;
		}

		if ( loading ) {
			return <Loader/>
		}

		return (
			<div className="container app-container">
				<ProductList products={products}/>
			</div>
		);

	}
}

const mapStateToProps = state => ({
	products: state.productsReducer.products,
	loading: state.productsReducer.loading,
	error: state.productsReducer.error,
});

export default connect(mapStateToProps)(App);

