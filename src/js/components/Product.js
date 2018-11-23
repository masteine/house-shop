import React from "react";
import PropTypes from "prop-types";
import Images from "./Product/Images";
import Address from "./Product/Address";
import Price from "./Product/Price";
import Area from "./Product/Area";

import './Product.css'

const Product = ({ product, templates }) => {
	return (
		<div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
			<div className="product">
				<Images images={product.images} product={product}/>
				<Address full_address={product.full_address}/>
				<Price price={product.price}/>
				<Area area={product.area}/>

			</div>
		</div>
	);
};
export default Product;

Product.propTypes = {
	product: PropTypes.object
};