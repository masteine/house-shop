import React from "react";
import PropTypes from "prop-types";
import Product from "./Product/Index"

const ProductList = ({ products }) => {

	return (
		<div className="row d-flex justify-content-start">
			{products.map(product => (
				<Product
					product={product} />
			))}
		</div>
	);
};

export default ProductList;

ProductList.propTypes = {
	products: PropTypes.array
};
