import React from "react"
import PropTypes from "prop-types"
import ProductItem from "./ProductItem/Index"

const ProductList = ({ products, productTemplate }) => {
	return (
		<div className="row d-flex justify-content-start align-content-stretch">
			{products.map(product => (
				<ProductItem key={product.id}
										 product={product}
										 productTemplate={productTemplate}/>
			))}
		</div>
	);
};

export default ProductList;

ProductList.propTypes = {
	products: PropTypes.array
};
